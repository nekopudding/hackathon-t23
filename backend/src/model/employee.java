package model;

import java.awt.*;

public class employee {
    private static final int step = 3;
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
    }

    public  void moveRight() {
        x+= step;
    }

    public void moveUp () {
        y+= step;
    }

    public  void moveDown() {
        y-= step;
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