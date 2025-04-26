import os
import cv2
import json
from collections import defaultdict
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = YOLO("model/best.pt")  # Put your model at this location

@app.post("/analyze")
async def analyze_image(image: UploadFile = File(...)):
    try:
        input_path = f"temp_{image.filename}"
        with open(input_path, "wb") as f:
            f.write(await image.read())

        results = model(input_path)
        boxes = results[0].boxes.xywh
        confidences = results[0].boxes.conf
        class_ids = results[0].boxes.cls
        labels = model.names

        class_count = defaultdict(int)
        for class_id in class_ids:
            class_name = labels[int(class_id)]
            class_count[class_name] += 1

        img = cv2.imread(input_path)
        for i, box in enumerate(boxes):
            x_center, y_center, width, height = box.tolist()
            x1, y1 = int(x_center - width / 2), int(y_center - height / 2)
            x2, y2 = int(x_center + width / 2), int(y_center + height / 2)
            label = labels[int(class_ids[i])]
            conf = confidences[i]
            cv2.rectangle(img, (x1, y1), (x2, y2), (0,255,0), 2)
            cv2.putText(img, f"{label} {conf:.2f}", (x1, y1 - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0,255,0), 2)

        output_image = f"annotated_{image.filename}"
        cv2.imwrite(output_image, img)

        return {
            "class_counts": dict(class_count),
            "annotated_image_url": f"/image/{output_image}"
        }

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

@app.get("/image/{filename}")
def get_image(filename: str):
    return FileResponse(filename)
