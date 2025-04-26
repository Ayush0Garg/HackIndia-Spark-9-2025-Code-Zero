package com.wasteManagement.wastify.Model;


public class MapData {
    private String Latitude;
    private String Longitude;
    private String imgUrl;

    public String getLatitude() {
        return Latitude;
    }

    public void setLatitude(String latitude) {
        Latitude = latitude;
    }

    public String getLongitude() {
        return Longitude;
    }

    public void setLongitude(String longitude) {
        Longitude = longitude;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public MapData(String latitude, String longitude, String imgUrl) {
        Latitude = latitude;
        Longitude = longitude;
        this.imgUrl = imgUrl;
    }
}
