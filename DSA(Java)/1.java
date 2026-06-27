// swap two numbers without using third variable
class MyClass {
    static int swap(int a, int b){
        int x = a;
        int y = b;
        
        x = x + y;
        y = x - y;
        x = x - y;
        
        System.out.print("A = "+x);
        System.out.print(" B = "+y);
        
        return x;
    }
  public static void main(String args[]) {
      int a = 10;
      int b = 30;
      
      swap(a,b);
  }
}