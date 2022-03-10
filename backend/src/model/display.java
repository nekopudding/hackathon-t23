package model;

import java.util.ArrayList;
import java.util.List;

public class display {
    private List<Item> items;
    private static final int capacity = 5;
    private int type; // 0: phones. 1: sound , 2: accessories, 3: computers, 4: repair
    private int x;
    private int y;

    public display(int x, int y, int type) {
        this.type = type;
        this.x = x;
        this.y = y;
        items = new ArrayList<>();
    }

    public void addItem(Item i) {
        items.add(i);
    }

    public int getX() {
        return x;
    }
    public int getY() {
        return y;
    }


}
