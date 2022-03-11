package model;

import java.util.ArrayList;
import java.util.List;

public class Store {
    public static List<display> displayList;
    private List<employee> employeeList;
    private database database;
    private user user;

    public Store() {
        displayList = new ArrayList<>();
        employeeList = new ArrayList<>();
        database = new database();
        user = new user();
    }

    public database getDatabase() {
        return database;
    }

    public List<employee> getEmployeeList() {
        return employeeList;
    }

    public List<display> getDisplayList() {
        return displayList;
    }

    public user getUser() {
        return user;
    }

    public void addDisplay(display d) {
        displayList.add(d);
    }

    public void addEmployee(employee e) {
        employeeList.add(e);
    }

}
