package model;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class display {
    private List<Item> items;
    private static final int capacity = 5;
    private int type; // 0: phones. 1: sound , 2: accessories, 3: computers, 4: repair
    private int x;
    private int y;
    public static final Color color = new Color(232, 241, 232);
    public static final int width = 80;
    public static final int height  = 40;

    public display(int x, int y, int type) {
        this.type = type;
        this.x = x;
        this.y = y;
        items = new ArrayList<>();
    }

    public void addItem(Item i) {
        items.add(i);
    }

    public List<Item> getItems() {
        return items;
    }

    public int getX() {
        return x;
    }
    public int getY() {
        return y;
    }


}
