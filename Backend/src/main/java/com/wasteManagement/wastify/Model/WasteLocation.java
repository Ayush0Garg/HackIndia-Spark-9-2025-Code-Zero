package com.wasteManagement.wastify.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class WasteLocation {
    @Id
    private Long id;
    private Double latitude;
    private Double longitude;

    public WasteLocation(Long reportID, Double lat, Double lon) {
        this.id = reportID;
        this.latitude = lat;
        this.longitude = lon;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
}
