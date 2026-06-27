// find the sum of digits and total number of digits in a given number
import java.util.*;

public class SumOfDigits {
    public static void main(String args[]) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Number : ");
        int n = sc.nextInt();
        int sum = 0, count = 0;

        while (n > 0) {
            int rem = n % 10;
            // sum = sum + rem;
            sum = (sum * 10) + rem;
            count++;
            n = (n / 10);
        }

        System.out.println("Sum of given number : " + sum);
        System.out.println("Totale Degit : " + count);

        sc.close();
    }
}