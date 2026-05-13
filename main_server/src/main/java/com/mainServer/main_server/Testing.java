package com.mainServer.main_server;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/")
public class Testing {
    @GetMapping("/")
    public Map<String, Object> test(){
        return Map.of("message", "api Java Spring Boot");
    }
}
