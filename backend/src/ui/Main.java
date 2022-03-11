package ui;

import model.pfc;

import javax.swing.*;
import java.awt.*;

public class Main extends JFrame {
    private static final int INTERVAL = 100;
    private pfc path;
    private Panel panel;

    public Main() {
        super("Store X");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setUndecorated(false);
        path = new pfc();
        panel = new Panel(path);
        add(panel);
        pack();
        centreOnScreen();

        setVisible(true);
        addTimer();
    }

    private void addTimer() {
        Timer t = new Timer(INTERVAL, ae -> {
            path.update();
            panel.repaint();
        });

        t.start();
    }

    private void centreOnScreen() {
        Dimension scrn = Toolkit.getDefaultToolkit().getScreenSize();
        setLocation((scrn.width - getWidth()) / 2, (scrn.height - getHeight()) / 2);
    }

    public static void main(String[] args) {
        new Main();
    }
}
