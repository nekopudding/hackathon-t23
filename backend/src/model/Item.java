package model;

public class Item {
    private String name;
    private int stock;
    private int x;
    private int y;

    public Item(String n, int st, int x, int y) {
        name = n;
        stock = st;
        this.x = x;
        this.y = y;
    }

    public int getX(){
        return x;
    }

    public int getY() {
        return y;
    }

    public String getName() {
        return name;
    }

    public int getStock() {
        return stock;
    }

}