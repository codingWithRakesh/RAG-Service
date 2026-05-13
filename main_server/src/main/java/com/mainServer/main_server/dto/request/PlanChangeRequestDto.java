package com.mainServer.main_server.dto.request;

import com.mainServer.main_server.entity.type.Payment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlanChangeRequestDto {
    private Payment payment;
}
