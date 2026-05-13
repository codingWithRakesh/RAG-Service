package com.mainServer.main_server.entity.type;

public enum Payment {
    FREE(10),
    MEDIUM(100),
    HIGH(1000);

    private final int amount;

    Payment(int amount) {
        this.amount = amount;
    }

    public int getAmount() {
        return amount;
    }
}
