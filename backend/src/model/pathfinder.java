package model;

public class pathfinder {

    private user user;
    private Item Item;

    public pathfinder(user u, Item i){
        user = u;
        Item = i;
    }



    public boolean location(){
        if (user.getX() > Item.getDisplay().getX() - 5 || user.getY() > Item.getDisplay().getY() - 5 || user.getX() < Item.getDisplay().getX() +5 || user.getY() < Item.getDisplay().getY() + 5)
            return true;
        else
            return false;
    }

}
