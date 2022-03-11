package model;

import ui.Panel;

import java.awt.*;


public class user {
    private static final int step = 3;
    private int x;
    private int y;
    public Color color = new Color(68, 71, 224);
    public static final int radius = 10;

    public user() {
        x = Panel.width/2;
        y = Panel.height/2;
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

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}
