//# nan_modules/get_fibonacci_number_with_bine.cc
#include <nan.h>
  using namespace std;
  using namespace Nan;
  using namespace v8;


double get_number_bine(unsigned int n)
{
    static const double phi = (1 + sqrt(5))*0.5; // Вычесление PHI для формулы.
    double fib = (pow(phi,n) - pow(1-phi,n))/sqrt(5); // формула для рассчета
    return round(fib);
}

  // Принимает позицую числа Фибоначчи из JS и вызывает функцию для получения его значения
  NAN_METHOD(get_fibonacci_number) {
    Nan::Maybe<double> value = Nan::To<double>(info[0]);
    Local<Number> retval = Nan::New(get_number_bine(value.FromJust()));
    info.GetReturnValue().Set(retval);
  }


  NAN_MODULE_INIT(Init) {
     Nan::Set(target, New<String>("get_fibonacci_number").ToLocalChecked(),
        GetFunction(New<FunctionTemplate>(get_fibonacci_number)).ToLocalChecked());
  }


  NODE_MODULE(get_fibonacci_number, Init)