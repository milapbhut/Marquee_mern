// find the distance between 2 even numbers in an array
import java.util.*;

public class MyClass {
  public static void main(String args[]) {
    
    Scanner sc = new Scanner(System.in);
    System.out.print("Entern Array Size: ");
    
    int n = sc.nextInt();
    int[] arr = new int[n];
    int dis = 0;
    
    System.out.println("Entern Array values : ");
    for(int i = 0; i<n ; i++){
        arr[i] = sc.nextInt();
    }
    
    System.out.println("Your Given array is :  ");
    for(int i = 0; i<n ; i++){
        System.out.print(arr[i] + " ");
    }
    System.out.println(" ");
    
    // for(int i = 0; i<n ; i++){
    //     if(arr[i] % 2 == 0){
    //         for(int j = i + 1; j<n ;j++){
    //             if(arr[j] % 2 == 0){
    //                 if(dis <= j - i){
    //                     dis = j - i;
    //                 }
    //             }
    //         }
    //     }
    // }
    
    for(int i = 0; i<n; i++ ){
        if(arr[i] % 2 == 0){
            for(int j = n - 1; j>=0; j--){
                if(arr[j] % 2 == 0){
                    dis = i - j;
                }
            }
        }
    }
    
    System.out.println("Distance beetwin 2 even number : " + dis);
    sc.close();
  }
}