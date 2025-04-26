package com.wasteManagement.wastify.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ImageEntity {
    @Id
    private long id;
    private String name;
    private String location;
    private String imageUrl;


}
