package com.wasteManagement.wastify.Model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AIResponse {

    private String lat;
    private String lon;
    private String severity;
    private String wasteType;
    private String imageUrl;

    public AIResponse(String lat, String lon, String severity, String wasteType, String imageUrl) {
        this.lat = lat;
        this.lon = lon;
        this.severity = severity;
        this.wasteType = wasteType;
        this.imageUrl = imageUrl;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public String getWasteType() {
        return wasteType;
    }

    public void setWasteType(String wasteType) {
        this.wasteType = wasteType;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
