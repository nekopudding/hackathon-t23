package model;

import ui.Panel;

import java.awt.*;

public class employee {
    private static final int step = 2;
    private int x;
    private int y;
    private int ID;
    private String name;
    public static final Color color = new Color(246, 4, 4);
    public static final int radius = 10;

    public employee(int x, int y, int ID, String name) {
        this.x = x;
        this.y = y;
        this.ID = ID;
        this.name = name;
    }

    public void moveLeft() {
        x -= step;
        handleBoundary();
    }

    public  void moveRight() {
        x+= step;
        handleBoundary();
    }

    public void moveDown () {
        y+= step;
        handleBoundary();
    }

    public  void moveUp() {
        y-= step;
        handleBoundary();
    }

    public void handleBoundary() {
        if (x + radius/2 >= ui.Panel.width) {
            x-= step;
        } else if (x - radius/2 <= 0) {
            x += step;
        }

        if (y + radius/2 >= Panel.height) {
            y -= step;
        } else if (y - radius/2 <= 0) {
            y += step;
        }
    }

    public int getX(){
        return x;
    }

    public int getY() {
        return y;
    }

    public int getID() {
        return ID;
    }

    public String getName() {
        return name;
    }
    
}