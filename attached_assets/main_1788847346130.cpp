#include <iostream>
using namespace std;

int main() {
  int choice = 1;

  cout << "Alan Rodriguez's Calculator \n";

  do {
    int z;
    cout << "\nType 1 for Addition, 2 for Subtraction, 3 for Multiplication, 4 for Division, 5 for Modulus \n";
    cout << "Operation to perform: ";
    cin >> z;

    if (z == 1) {
      cout << "Addition \n \n"; }

    else if (z == 2) {
      cout << "Subtraction \n \n"; }

    else if (z == 3) {
      cout << "Multiplication \n \n"; }

    else if (z == 4) {
      cout << "Division \n \n"; }

    else if (z >= 5) {
      cout << "Modulus \n \n"; }

    double x, y;
    double sum;
    double product;
    double difference;
    double quotient;
    int modulus;

    cout << "Type a number: ";
    cin >> x;
    cout << "Type another number: ";
    cin >> y;
    cout << "\n";
    sum = x + y;
    product = x * y;
    difference = x - y;
    quotient = x / y;
    modulus = (long long) x % (long long) y;

    if (z == 1) {
      cout << "Sum is: " << sum << "\n"; }

   else if (z == 2) {
      cout << "Difference is: " << difference << "\n"; }

    else if (z == 3) {
      cout << "Product is: " << product << "\n"; }

    else if (z == 4) {
      cout << "Quotient is: " << quotient << "\n"; }
      
   else if (z >= 5) {
      cout << "Modulus is: " << modulus << "\n"; }

    cout << "\nType 1 for yes more calculations, or 2 for no more calculations: ";
    cin >> choice;

  } while (choice == 1);

  if (choice >= 2) {
    cout << "\nThanks For Using Alan's Calculator!\n";
  cout << "goodbye" << "\n" ; }

  // By Alan Rodriguez - Thanks For Using my Calculator!
  return 0;
}