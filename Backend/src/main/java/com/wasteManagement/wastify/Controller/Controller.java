package com.wasteManagement.wastify.Controller;

import com.wasteManagement.wastify.Model.AIResponse;
import com.wasteManagement.wastify.Model.AssignedJob;
import com.wasteManagement.wastify.Model.MapData;
import com.wasteManagement.wastify.Service.DatabaseService;
import com.wasteManagement.wastify.Service.ImageService;
import com.wasteManagement.wastify.Model.WasteReport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/wastify")
public class Controller {

    @Autowired
    private ImageService imageService;

    @Autowired
    private DatabaseService databaseService;


    @Autowired
    private com.wasteManagement.wastify.Service.dataService dataService;

    //images upload and update
    @PostMapping("/upload/new")
    public ResponseEntity<String> uploadImage(
            @RequestParam("image") MultipartFile file,
            @RequestParam("usertype") String usertype,
            @RequestParam("latitude") Double lat,
            @RequestParam("longitude") Double lon,
            @RequestParam("datetime") LocalDateTime dateTime,
            @RequestParam(value = "workerId", required = false) Long workerId,
            @RequestParam(value = "taskId", required = false) Long wasteReportId
    ) throws IOException {

        if (file.isEmpty())
            return ResponseEntity.badRequest().body("Image Not Found");

        if (usertype == null || lat == null || lon == null)
            return ResponseEntity.badRequest().body("Missing base parameters");

        switch (usertype) {
            case "USER":
                AIResponse aiResponse = imageService.sendToAI(file);
                Long reportID = databaseService.saveWasteReport(aiResponse, dateTime);
                databaseService.saveLocation(reportID, lat, lon);
                break;

            case "WORK":
                // Validate WORK-specific params
                if (workerId == null || wasteReportId == null)
                    return ResponseEntity.badRequest().body("Missing worker/task details");

                String imageUrl = imageService.saveImage(file);
                databaseService.removeAssignDatabase(workerId, wasteReportId);
                databaseService.updateHistoryDatabase(workerId, imageUrl, dateTime, wasteReportId);
                break;

            default:
                return ResponseEntity.badRequest().body("Invalid User Type");
        }

        return ResponseEntity.ok("Image uploaded");
    }


    @PostMapping("/assign")
    public ResponseEntity<String> assignJob (@RequestBody AssignedJob assignedJob){
        databaseService.addAssignDatabase(assignedJob);
        databaseService.updateReports(assignedJob.getWasteReportId());
        return ResponseEntity.ok().body("Job assigned to" + assignedJob.getWorkerId());
    }

    @GetMapping("/get/reports")
    public ResponseEntity<List<WasteReport>> getAllReports(){
        List<WasteReport> ans = new ArrayList<>();
        ans = dataService.getAllReports();
        return ResponseEntity.ok().body(ans);

    }

    @GetMapping("/get/assign")
    public ResponseEntity<List<AssignedJob>> getAllJobs(){
        List<AssignedJob> list = new ArrayList<>();
        list = dataService.getjobs();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping("/upload/image")
    public ResponseEntity<String> uploadImage(AIResponse aiResponse
    ) throws IOException{
        databaseService.saveWasteReport(aiResponse, LocalDateTime.now());
        return ResponseEntity.ok().body("uploaded");

    }


    @GetMapping("/get/stats")
    public ResponseEntity<HashMap<String, Long>> getStats(){
        HashMap<String, Long> stat = new HashMap<>();
        stat = dataService.getStats();
        return ResponseEntity.ok().body(stat);
    }

    @GetMapping("/get/maps")
    public  ResponseEntity<List<MapData>> getMapData(){
        List<MapData> mapData = new ArrayList<>();
        mapData = dataService.getMapData();
        return ResponseEntity.ok().body(mapData);
    }

    @GetMapping("/test")
    public ResponseEntity<String> test(){
        return ResponseEntity.ok().body("Success");
    }


}
