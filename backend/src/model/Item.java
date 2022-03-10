package model;

public class Item {
    private String name;
    private int stock;
    private display display;

    public Item(String n, int st, int x, int y, display d) {
        display = d;
        name = n;
        stock = st;
    }

    public String getName() {
        return name;
    }

    public int getStock() {
        return stock;
    }

}