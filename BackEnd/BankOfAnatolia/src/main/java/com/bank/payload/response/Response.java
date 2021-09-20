package com.bank.payload.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Response {
    boolean isSuccess;
    String message;
}
