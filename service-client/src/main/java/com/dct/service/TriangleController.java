package com.dct.service;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/triangle")
public class TriangleController {

    @RequestMapping(value = "/checkTriangle", method = RequestMethod.GET)
    public
    @ResponseBody
    String checkTriangle() {
        System.out.println("test2");

        return "test2";
    }
}
