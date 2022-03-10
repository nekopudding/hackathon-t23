package model;

import java.util.ArrayList;
import java.util.List;

public class database {
    private List<Item> itemList; // all items in store

    public database() {
        itemList = new ArrayList<>();
    }

    public void addItem(Item i) {
        itemList.add(i);
    }

    public void removeItem(Item i) {
        itemList.remove(i);
    }

    public int stock(Item i) {
        int count = 0;
        for (Item j: itemList) {
            if(i.getType() == j.getType()){
                count++;
            }
        }
        return count;
    }

    public Boolean inStock(Item i) {
        return !(stock(i) == 0);
    }

}
