package com.mainServer.main_server.dto.response;

import com.mainServer.main_server.entity.type.Payment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlanChangeResponseDto {
    private String name;
    private String email;
    private Payment payment;
}
