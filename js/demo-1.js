// --操作符--


// 1.按位非
// 按位非操作符由一个波浪线(~)表示,执行按位非的结果就是返回数字的反码
// var num1 =25;
// var num2 = ~num1;
// alert(num2);


// 2.按位与(&)
// 按位与操作只在两个数值的对应位都是1时才返回1,任何一位是0,结果都是0
// var result = 25 & 3;
// alert(result);


// 3.按位或(|)
// 按位或操作在有一个位1的情况下就返回1,而只有在两个位都是0的情况下才返回0
// var result = 25 | 3;
// alert(result);


// 4.按位异或(^)
// 按位异或与按位或的不同之处在于,在两个数值对应位上只有一个1时才返回1,如果对应的两位都是1或都是0,则返回0
// var result = 25 ^ 3;
// alert(result);


//5.左移(<<)
// 将数值的所有位向左移动指定的位数,原数值的空位以0填充
// var oldValue = 2;
// var newValue = oldValue << 5;
// alert(newValue);


// 6.1有符号的右移(>>)
// 操作符会将数值向右移动,但保留符号位(即正负号标记),此时ECMAScrip会用符号位的值来填充所有空位
// var oldValue = 64;
// var newValue = oldValue >> 5;
// alert(newValue);

// 6.2 无符号右移(>>>)
// 将数值的所有32位都向右移动,以0来填充空位
// var oldValue = 64;
// var newValue = oldValue >>> 5;
// alert(newValue);
// *无符号右移操作符会把负数的二进制码当成整数的二进制码,由于负数以绝对值的二进制补码形式表示,因此导致无符号右移后结果非常大
// var oldValue = -64;
// var newValue = oldValue >>> 5;
// alert(newValue);


// 7.布尔操作符
// 7.1 逻辑非(!)

// 7.2 逻辑与(&&)
// var result = true && false;
// 逻辑与操作属于短路操作,如果第一个操作数能够决定结果,那么就不会再对第二个操作数求值.如果第一个操作数是false,
// 无论第二个操作数是什么值,结果都是false
// var found = true;
// var result = (found && someUndefinedVariable); //这里会发生错误
// alert(result);

// var found = false;
// var result = (found && someUndefinedVariable); 
// alert(result);
// 7.3 逻辑或(||)

// var result = true || false;
// var found = true;
// var result = (found || someUndefinedVariable);
// alert(result);

// var found = false;
// var result = (found || someUndefinedVariable);
// alert(result);


// 8.乘性操作符(*):用于计算两个数值的乘积
// var result = 34 * 56;
// 9.除法(/):执行第二个操作数除以第一个操作数的计算


// 打印三角形
// var s = '';
// for(var i = 0;i<10;i++){
// 	for(var h=i;h<10;h++){
// 		s += "* ";
// 	}
// 	s += "\n";
// }
// console.log(s);

