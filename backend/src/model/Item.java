package model;

public class Item {
    private String name;
    private int type; //0: phones. 1: sound , 2: accessories, 3: computers, 4: repair
    private display display;

    public Item(String n, int type, display d) {
        display = d;
        name = n;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public int getType() {
        return type;
    }

}