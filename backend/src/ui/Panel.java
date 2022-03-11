package ui;

import model.display;
import model.employee;
import model.pfc;
import model.user;

import javax.swing.*;
import java.awt.*;

public class Panel extends JPanel {
    public static final int width = 900;
    public static final int height = 900;
    private pfc path;

    // Constructs a Store
    // Effects: updates this with game to be displayed
    public Panel(pfc path) {
        setPreferredSize(new Dimension(width, height));
        setBackground(Color.BLACK);
        this.path = path;
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        drawStore(g);
    }

    public void drawStore(Graphics g) {
        drawUser(g);
        drawDisplays(g);
        drawEmployees(g);
    }

    public void drawDisplays(Graphics g) {
        for (display d: path.getStore().getDisplayList()) {
            drawDisplay(g,d);
        }
    }

    public void drawDisplay(Graphics g, display d) {
        display dis = d;
        Color savedCol = g.getColor();
        g.setColor(d.color);
        g.fillRect(d.getX(),d.getY(),d.width,d.height);
        g.setColor(savedCol);
    }

    public void drawEmployees(Graphics g) {
        for (employee e: path.getStore().getEmployeeList()) {
            drawEmployee(g,e);
        }
    }

    public void drawEmployee(Graphics g, employee employee) {
        employee e = employee;
        Color savedCol = g.getColor();
        g.setColor(e.color);
        g.fillOval(e.getX() - e.radius/2, e.getY() - e.radius/2, e.radius,e.radius);
        g.setColor(savedCol);
    }

    public void drawUser(Graphics g) {
        user u = path.getStore().getUser();
        Color savedCol = g.getColor();
        g.setColor(u.color);
        g.fillOval(u.getX() - u.radius / 2, u.getY() - u.radius / 2, u.radius, u.radius);
        g.setColor(savedCol);
    }
}
