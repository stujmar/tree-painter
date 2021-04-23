import React from 'react';

const Classic = () => {

    let code = `
    Car myCar1;
    Car myCar2;
    Tree tree;
    boolean treeMode;
    boolean refresh;
    ArrayList<Tree> treeClick = new ArrayList<Tree>();
    // To hold a single tree or a cluster.
    ArrayList<ArrayList<Tree>> treeArray = new ArrayList<ArrayList<Tree>>();
    
    void setup() {
      boolean treeMode = true;
      boolean refresh = true;
      rectMode(CENTER);
      size(400,400);
      background(150,200,35);
      // Parameters go inside the parentheses when the object is constructed.
      myCar1 = new Car(color(255,0,0),0,100,2); 
      myCar2 = new Car(color(80,80,255),0,80,-1);
    }
    
    void mouseClicked() {
      if (mouseY > 20 && treeMode) { //add a tree.
        float treeSize = random(15,25);
        color c = color(random(80,150), random(220,255), random(90,110)); 
          treeArray.add(new ArrayList<Tree>()); 
          treeArray.get(treeArray.size() - 1).add(new Tree(mouseX, mouseY, treeSize, c, false));
        } else if (mouseX > 250 && mouseY < 20){ //Toggle Modes.
        treeMode = !treeMode;
      } else if (mouseX < 75 && mouseY < 20) { //Clear.
          treeArray = new ArrayList<ArrayList<Tree>>();
      } else if (mouseX > 75 && mouseX < 150 && mouseY < 20 && treeArray.size() > 0)
      treeArray.remove(treeArray.size() - 1);
      refresh = true;
    }
    
    void draw() {
     
      if (mousePressed && !treeMode && mouseY > 20) {
        treeArray.add(new ArrayList<Tree>()); 
        for (int t = 0; t < 11; t ++) {
            float xOffset = random(-25,25);
            float yOffset = random(-25,25);
            float thisTreeSize = random(15,25);
            color rgb = color(random(80,150), random(220,255), random(90,110)); 
            treeArray.get(treeArray.size() - 1).add(new Tree(mouseX + xOffset, mouseY + yOffset, thisTreeSize, rgb, false));
            drawFromArray();
        }
      }
      
       if (refresh) {
       drawFromArray();//drawFromArray();
      }
      drawToggle(treeMode, "one", 250,0);
      drawToggle(treeMode, "cluster", 325,0);
      fill(255);
      rectMode(CORNER);
      rect(0,0, 75, 20);
      rect(75, 0, 75, 20);
      fill(0);
      textSize(12);
      text("clear", 20, 15);
      text("undo", 20 + 75, 15);
    
      fill(150);
      rect(-2, 77, width + 5, 15);
      rect(-2, 97, width + 5, 15);
      myCar1.drive();
      myCar1.display();
      myCar2.drive();
      myCar2.display();
    }
    
    class Car { 
      color c;
      float xpos;
      float ypos;
      float xspeed;
    
      Car(color tempC, float tempXpos, float tempYpos, float tempXspeed) { 
        c = tempC;
        xpos = tempXpos;
        ypos = tempYpos;
        xspeed = tempXspeed;
      }
    
      void display() {
        stroke(0);
        fill(c);
        rect(xpos,ypos,20,10);
        rect(xpos + 5,ypos,10,10);
      }
    
      void drive() {
        xpos = xpos + xspeed;
        if (xpos > width) {
          xpos = 0;
        } else if (xpos < 0) {
          xpos = width;
        }
      }
    }
    
    class Tree {
      float xPos;
      float yPos;
      float treeSize;
      color treeColor;
      boolean cluster;
      
        // The Constructor is defined with arguments.
      Tree(float xPos, float yPos, float treeSize, color treeColor, boolean cluster) { 
        this.treeSize = treeSize;
        this.xPos = xPos;
        this.yPos = yPos;
        this.treeColor = treeColor;
        this.cluster = cluster;
      }
      
    }
    
    void drawToggle(boolean treeMode, String name, int x, int y) {
      rectMode(CORNER);
      if ((treeMode && name == "one") || (!treeMode && name == "cluster")) {
      fill(255,0,255);
      } else {
      fill(255);
      }
      rect(x,y, 75, 20);
      fill(0);
      text(name, x + 5, y + 15);
      rectMode(CENTER);
    }
    
    void drawFromArray(){
      background(150,200,35);
      if (treeArray.size() > 0) {
        for (int i = 0; i < treeArray.size(); i++) {
          for (int j = 0; j < treeArray.get(i).size(); j++) {
          fill(treeArray.get(i).get(j).treeColor);
          ellipse(
            treeArray.get(i).get(j).xPos, 
            treeArray.get(i).get(j).yPos,
            treeArray.get(i).get(j).treeSize,
            treeArray.get(i).get(j).treeSize);
          }  
        }
      }
      refresh = false;
    }
    `

    return (
        <div className="text-center">
        <p className="mt-4">Coming soon.</p>
        {/* <a className="text-gray-400 hover:text-blue-400" href="https://gostugo.com/treepainter.html">here is a link to it.</a> */}
        <script type="application/processing">{code}</ script>
        <canvas class="treepainter"> </canvas>
        </div>
    )
}

export default Classic;