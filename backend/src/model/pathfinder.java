package model;

public class pathfinder {
    private int user_x;
    private int user_y;
    private int display_x;
    private int display_y;

    private user user;
    private Item Item;

    public pathfinder(user u, Item i){
        user = u;
        Item = i;
    }

    public pathfinder(int x, int y, int X, int Y) {
        user_x = x;
        user_y = y;
        display_x = X;
        display_y = Y;

    }

    public boolean location(){
        if (user_x > Item.getDisplay().getX() - 5 || user_y > Item.getDisplay().getY() - 5 || user_x < Item.getDisplay().getX() +5 || user_y < Item.getDisplay().getY() + 5)
            return true;
        else
            return false;
    }

}
