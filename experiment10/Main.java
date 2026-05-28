public class Main {
    public static void main(String[] args) {
        SavingsAccount savings = new SavingsAccount("SAV001", "Alice", 50000);
        CurrentAccount current = new CurrentAccount("CUR001", "Bob", 100000);

        System.out.println("=== Savings Account ===");
        savings.displayDetails();
        savings.deposit(5000);
        savings.calculateInterest();

        System.out.println("\n=== Current Account ===");
        current.displayDetails();
        current.deposit(10000);
        current.calculateInterest();
    }
}
