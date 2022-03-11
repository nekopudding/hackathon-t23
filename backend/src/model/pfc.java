package model;

import ui.Panel;

public class pfc {
    private static final int NUM_EMPLOYEES = 3;
    private static final int NUM_DISPLAYS = 25;
    private static final int NUM_ITEMS = NUM_DISPLAYS * 5;
    private Store store;

    public pfc() {
        store = new Store();
        setup();
    }

    public void setup(){
       setupDisplays();
       setupEmployees();
       setupItems();
    }

    public void update() {
        store.getUser().moveDown();
    }

    public Store getStore() {
        return store;
    }

    public void setupEmployees() {
       store.addEmployee(new employee(20,20,0,"John"));
       store.addEmployee(new employee(860,450,1,"John"));
       store.addEmployee(new employee(20,850,2,"John"));
    }

    public void setupDisplays() {
        int j = -1;
        int x = 0;
        int y = 0;
        for (int i = 0; i < NUM_DISPLAYS; i++) {
            if (i%5 == 0) {
                j++;
                x += Panel.width/5 - 45;
                y = Panel.width/5 - 45;
            }
            store.addDisplay(new display(x,y,j));
            y += Panel.width/5 - 30;
        }

    }

    public void setupItems() {
        int j = -1;
        for (int i = 0; i < NUM_ITEMS; i++) {
            if (i%25 == 0) {
                j++;
            }
            store.getDatabase().addItem(new Item("",j, store.getDisplayList().get(j)));
        }
    }



}
