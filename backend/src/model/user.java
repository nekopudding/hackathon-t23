package model;

import ui.Panel;

import java.awt.*;


public class user {
    private static final int step = 2;
    private int x;
    private int y;
    public Color color = new Color(68, 71, 224);
    public static final int radius = 10;

    public user() {
        x = 110;
        y = 280;
    }

    public void moveLeft() {
        x -= step;
        handleBoundary();
        if (isTouchingDisplay()) {
            x += step;
        }
    }

    public void moveRight() {
        x += step;
        handleBoundary();
        if (isTouchingDisplay()) {
            x -= step;
        }
    }

    public void moveDown() {
        y += step;
        handleBoundary();
        if (isTouchingDisplay()) {
            y -= step;
        }
    }

    public void moveUp() {
        y -= step;
        handleBoundary();
        if (isTouchingDisplay()) {
            y += step;
        }
    }

    public void handleBoundary() {
        if (x + radius / 2 >= Panel.width) {
            x -= step;
        } else if (x - radius / 2 <= 0) {
            x += step;
        }

        if (y + radius / 2 >= Panel.height) {
            y -= step;
        } else if (y - radius / 2 <= 0) {
            y += step;
        }
    }

    public Boolean isTouchingDisplay() {
        for (display d : Store.displayList) {
            if (x + radius / 2 >= d.getX() && x - radius / 2 <= d.getX() + d.width) {
                if (y + radius / 2 >= d.getY() && y - radius / 2 <= d.getY() + d.height) {
                    return true;
                }
            }
        }
        return false;
    }


    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}
