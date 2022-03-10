package model;

public class employee {
    private int x;
    private int y;
    private int ID;
    private String name;

    public employee(int x, int y, int ID, String name) {
        this.x = x;
        this.y = y;
        this.ID = ID;
        this.name = name;
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
