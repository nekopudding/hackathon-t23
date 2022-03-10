package model;

public class user {
    private static final int step = 3;
    private int x;
    private int y;

    public user() {
        x = 0;
        y = 0;
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
