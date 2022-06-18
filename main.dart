import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);



  static const String _title = '';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: _title,
      home: Scaffold(
        appBar: AppBar(title: const Text(_title)),
        body: const MyStatefulWidget(),
      ),
    );
  }
}

class MyStatefulWidget extends StatefulWidget {
  const MyStatefulWidget({Key? key}) : super(key: key);

  @override
  State<MyStatefulWidget> createState() => _MyStatefulWidgetState();

}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  TextEditingController nameController = TextEditingController();
  TextEditingController passwordController = TextEditingController();

  TextEditingController dateinput = TextEditingController();



  void initState() {
    dateinput.text = ""; //set the initial value of text field
    super.initState();
  }



  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.all(10),
        child: ListView(
          children: <Widget>[
            Container(
                alignment: Alignment.center,
                padding: const EdgeInsets.all(10),
                child: const Text(
                  'TrouFree',
                  style: TextStyle(
                      color: Colors.green,
                      fontWeight: FontWeight.w500,
                      fontSize: 30),
                )),
            Container(
                alignment: Alignment.center,
                padding: const EdgeInsets.all(10),
                child: const Text(
                  '',
                  style: TextStyle(fontSize: 20),
                )),
            Container(
              padding: const EdgeInsets.all(10),
              child: TextField(
                controller: nameController,
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: 'Admission Number',
                ),
              ),
            ),
           // Container(
             // padding: const EdgeInsets.fromLTRB(10, 10, 10, 0),
              //child: TextField(
                //obscureText: true,
                //controller: DatePickerDateTimeOrder.time_dayPeriod_date,
                //decoration: const InputDecoration(
                  //border: OutlineInputBorder(),
                  //labelText: 'dd-mm-yy',
                //),
              //),
            //),
           /* TextButton(
              onPressed: () {
                //forgot password screen
              },
              child: const Text('Forgot Password',),
            ),*/




            Container(
                padding: EdgeInsets.all(15),
                height:150,
                child:Center(
                    child:TextField(
                      controller: dateinput, //editing controller of this TextField
                      decoration: InputDecoration(
                          icon: Icon(Icons.calendar_today), //icon of text field
                          labelText: "DOB" //label text of field
                      ),
                      readOnly: true,  //set it true, so that user will not able to edit text
                      onTap: () async {
                        DateTime? pickedDate = await showDatePicker(
                            context: context, initialDate: DateTime.now(),
                            firstDate: DateTime(1998), //DateTime.now() - not to allow to choose before today.
                            lastDate: DateTime(2101),
                        );

                        if(pickedDate != null ){
                          print(pickedDate);  //pickedDate output format => 2021-03-10 00:00:00.000
                          String formattedDate = DateFormat('dd-MM-yyyy').format(pickedDate);
                          print(formattedDate); //formatted date output using intl package =>  2021-03-16
                          //you can implement different kind of Date Format here according to your requirement

                          setState(() {
                            dateinput.text = formattedDate; //set output date to TextField value.
                          });
                        }else{
                          print("Date is not selected");
                        }
                      },
                    )
                )
            )



        ,
            Container(
                height: 50,
                padding: const EdgeInsets.fromLTRB(11, 4, 11, 4),
                child: ElevatedButton(
                  child: const Text('Login'),
                  onPressed: () {
                    print(nameController.text);
                    print(passwordController.text);
                  },
                )
            ),
            Row(
              children: <Widget>[
                //const Text('Does not have account?'),
                /*TextButton(
                  child: const Text(
                    'Sign Up',
                    style: TextStyle(fontSize: 20),
                  ),
                  onPressed: () {
                    //signup screen
                  },
                )*/
              ],
              mainAxisAlignment: MainAxisAlignment.center,
            ),
          ],
        ));
  }
}