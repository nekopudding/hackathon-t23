package model;

public class pfc {
    private static final int NUM_EMPLOYEES = 5;
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

    public void setupEmployees() {
        for (int i = 0; i < NUM_EMPLOYEES; i++) {
            store.addEmployee(new employee(0,0, i, "Rand"));
        }
    }

    public void setupDisplays() {
        int j = -1;
        for (int i = 0; i < NUM_DISPLAYS; i++) {
            if (i%5 == 0) {
                j++;
            }
            store.addDisplay(new display(0,0,j));
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
