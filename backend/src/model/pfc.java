package model;

import ui.Panel;

import java.util.ArrayList;
import java.util.List;

public class pfc {
    private static final int NUM_EMPLOYEES = 3;
    private static final int NUM_DISPLAYS = 25;
    private static final int NUM_ITEMS = NUM_DISPLAYS * 5;
    private Store store;
    private pathfinder pf;
    private List<String> path;
    private List<String> subPath;
    private int length;
    private int sub;

    public pfc() {
        length = 999999999;
        store = new Store();
        path = new ArrayList<>();
        setup();
    }

    public void setup() {
        setupDisplays();
        setupEmployees();
        setupItems();
        try {
            pathFinder(store.getUser().getX(), store.getUser().getY(), store.getDisplayList().get(0).getItems().get(0));
        } catch (Exception e ) {
            System.out.println("Found a path");
        }


    }

    public void update() {
        store.getUser().moveRight();
    }

    public void pathFinder(int x, int y, Item i) throws Exception {
        if (isTouchingDisplayTrue(x,y,i)) {
            sub = path.size();
            if (sub < length ) {
                subPath = path;
                length = sub;
            }
            throw new Exception("Found it");
        } else if (handleBoundary(x,y)) {
            return;
        } else if (isTouchingDisplay(x,y)) {
            return;
        } else {
            path.add("R");
            pathFinder(x + 1, y, i);
            path.add("D");
            pathFinder(x, y + 1, i);
            path.add("U");
            pathFinder(x, y - 1, i);
            path.add("L");
            pathFinder(x - 1, y, i);
        }
    }

    public Boolean isTouchingDisplayTrue(int x, int y, Item i) {
        if (x + user.radius / 2 >= i.getDisplay().getX()
                && x - user.radius / 2 <= i.getDisplay().getX() + i.getDisplay().width) {
            if (y + user.radius / 2 >= i.getDisplay().getY()
                    && y - user.radius / 2 <= i.getDisplay().getY() + i.getDisplay().height) {
                return true;
            }
        }
        return false;
    }

    public Boolean isTouchingDisplay(int x, int y) {
        for (display d: store.getDisplayList())
        if (x + user.radius / 2 >= d.getX()
                && x - user.radius / 2 <= d.getX() + d.width) {
            if (y + user.radius / 2 >= d.getY()
                    && y - user.radius / 2 <= d.getY() + d.height) {
                return true;
            }
        }
        return false;
    }



    public Boolean handleBoundary(int x, int y) {
        if (x + user.radius / 2 >= Panel.width) {
            return true;
        } else if (x - user.radius / 2 <= 0) {
            return true;
        }

        if (x + user.radius / 2 >= Panel.height) {
            return true;
        } else if (y - user.radius / 2 <= 0) {
            return true;
        }

        return false;
    }

    public Store getStore() {
        return store;
    }

    public void setupEmployees() {
        store.addEmployee(new employee(20, 20, 0, "John"));
        store.addEmployee(new employee(860, 450, 1, "Jo"));
        store.addEmployee(new employee(20, 850, 2, "Jen"));
    }

    public void setupDisplays() {
        int j = -1;
        int x = 0;
        int y = 0;
        for (int i = 0; i < NUM_DISPLAYS; i++) {
            if (i % 5 == 0) {
                j++;
                x += Panel.width / 5 - 45;
                y = Panel.width / 5 - 45;
            }
            store.addDisplay(new display(x, y, j));
            y += Panel.width / 5 - 30;
        }

    }

    public void setupItems() {
        int j = -1;
        for (int i = 0; i < NUM_ITEMS; i++) {
            if (i % 25 == 0) {
                j++;
            }
            store.getDatabase().addItem(new Item("", j, store.getDisplayList().get(j)));
        }
    }


}
