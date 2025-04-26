package com.wasteManagement.wastify.Service;

import com.wasteManagement.wastify.Model.AIResponse;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

@Service
@Getter
@Setter
public class ImageService {

    private static final String URL = "";

    private final RestTemplate restTemplate;

    public ImageService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public AIResponse sendToAI(MultipartFile file) {

        MultiValueMap<String, Object> image = new LinkedMultiValueMap<>();
        image.add("image", file);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(image);

        try{
            ResponseEntity<AIResponse> response = restTemplate.exchange(URL,
                    HttpMethod.POST,
                    requestEntity,
                    AIResponse.class);

            if (response.getStatusCode() == HttpStatus.OK){
                return response.getBody();
            }
            else{
                throw new RuntimeException("Failed To Get Response: " + response.getStatusCode());
            }
        }
        catch (Exception e){
            throw new RuntimeException("Error Sending Image: ", e);
        }

    }

    public String saveImage(MultipartFile file) {
        //TODO
        return "";
    }

}
