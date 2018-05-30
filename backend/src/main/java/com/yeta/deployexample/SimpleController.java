package com.yeta.deployexample;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
public class SimpleController {

    @GetMapping("/simple-objects")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<SimpleObject> simpleObjects() {
        return Stream.of("First Object", "Second Object", "Third Object")
                .map(SimpleObject::new)
                .collect(Collectors.toList());
    }

}
