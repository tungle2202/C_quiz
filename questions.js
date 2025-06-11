const questions = [
  {
    "question": "Một biến được gọi là biến toàn cục nếu:",
    "options": [
      "Nó được khai báo tất cả các hàm, ngoại trừ hàm main()",
      "Nó được khai báo ngoài tất cả các hàm kể cả hàm main()",
      "Nó được khai báo bên ngoài hàm main()",
      "Nó được khai báo bên trong hàm main()"
    ],
    "answer": "Nó được khai báo ngoài tất cả các hàm kể cả hàm main()"
  },
  {
    "question": "Kiểu dữ liệu float có thể xử lý dữ liệu trong phạm vi nào:",
    "options": [
      "3.4*10-38 đến 3.4/1038",
      "-32768 đến 32767",
      "-128 đến 127",
      "0 đến 65535"
    ],
    "answer": "3.4*10-38 đến 3.4/1038"
  },
  {
    "question": "Giả sử a, b là 2 số thực. Biểu thức nào dưới đây viết không đúng theo cú pháp của ngôn ngữ lập trình C:",
    "options": [
      "(a+=b)",
      "(a*=b)",
      "(a=b)",
      "(a&=b)"
    ],
    "answer": "(a&=b)"
  },
  {
    "question": "Một biến được gọi là một biến địa phương nếu:",
    "options": [
      "Nó được khai báo bên trong các hàm hoặc thủ tục, kể cả hàm main()",
      "Nó được khai báo bên trong các hàm ngoại trừ hàm main()",
      "Nó được khai báo bên trong hàm main()",
      "Nó được khai báo bên ngoài các hàm kể cả hàm main()"
    ],
    "answer": "Nó được khai báo bên trong các hàm hoặc thủ tục, kể cả hàm main()"
  },
  {
    "question": "Ngôn ngữ lập trình C được Dennish phát triển dựa trên ngôn ngữ lập trình nào?:",
    "options": [
      "Ngôn ngữ B",
      "Ngôn ngữ BCPL",
      "Ngôn ngữ DEC PDP",
      "Ngôn ngữ B và BCPL"
    ],
    "answer": "Ngôn ngữ B và BCPL"
  },
  {
    "question": "Cho a=3, b=2. Biến c=(a<<=b) sẽ có giá trị nào dưới đây:",
    "options": [
      "c=9",
      "c=12",
      "c=8",
      "c=6"
    ],
    "answer": "c=12"
  },
  {
    "question": "Cho biết giá trị của biểu thức 2+4>2&&4<2:",
    "options": [
      '0',
      '1',
      '-1',
      'Tất cả đều sai'
    ],
    "answer": "0"
  },
  {
    "question": `Kết quả của chương trình sau:\n\n#include <stdio.h>\nvoid main(){\n    int i;\n    i = 10;\n    printf("%o", i);\n}`,
    "options": [
      "10",
      "12",
      "8",
      "Kết quả khác"
    ],
    "answer": "12"
  },
  {
    "question": "Giả sử a và b là 2 số thực. Biểu thức nào dưới đây là không được phép theo cú pháp của ngôn ngữ lập trình C",
    "options": [
      "(a/=b)",
      "(a-=b)",
      "(a>>=b)",
      "(a*=b)"
    ],
    "answer": "(a>>=b)"
  },
  {
    "question": "Kiểu dữ liệu int (kiểu số nguyên) có thể xử lý số nguyên nằm trong khoảng nào",
    "options": [
      "0...255",
      "-32768...32767",
      "-128...127",
      "0...65535"
    ],
    "answer": "-32768...32767"
  },
  {
    "question": "Câu nào sau đây cho thấy cú pháp đúng cho câu lệnh if:",
    "options": [
      "if expression",
      "if { expression",
      "if ( expression )",
      "expression if"
    ],
    "answer": "if ( expression )"
  },
  {
    "question": "int a, *p, *q;\nfloat *t;\na = 5;\np = &a;\np = q;\nt=p;\nprintf(\"%d%f\", a, t);\n\nKết quả là:",
    "options": [
      "5-12",
      "5",
      "Chương trình lỗi",
      "Kết quả khác"
    ],
    "answer": "Chương trình lỗi"
  },
  {
    "question": "Kết quả in ra màn hình của chương trình sau là gì:\n#include <stdio.h>\nvoid main(){\n int i;\n  for(i = 2;; i++);\n   printf(\" %3d”, i);\n}",
    "options": [
      "Vòng lặp vô hạn",
      "2",
      "1 2",
      "Kết quả khác"
    ],
    "answer": "Vòng lặp vô hạn"
  },
  {
    "question": "Lệnh nào trong các lệnh sau cho phép dừng câu lệnh điều khiển",
    "options": [
      "break",
      "goto",
      "continue",
      "Cả 3 phương án trên"
    ],
    "answer": "Cả 3 phương án trên"
  },
  {
    "question": "Dạng tổng quát của hàm printf() là: printf(\"dãy mã quy cách\", dãy mã biểu thức); Trong đó, dãy mã quy cách sẽ là:",
    "options": [
      "Dãy các mã định dạng dữ liệu hiển thị",
      "Con trỏ của xâu kí tự",
      "Các xâu kí tự mang tính chất thông báo",
      "Cả 3 phương án trên"
    ],
    "answer": "Dãy các mã định dạng dữ liệu hiển thị"
  },
  {
    "question": "Kết quả in ra màn hình của chương trình sau:\n#include <stdio.h>\nvoid main(){\n int ch = 'A’;\n printf(\" %d”, ch);\n}",
    "options": [
      "A",
      "a",
      "65",
      "Kết quả khác"
    ],
    "answer": "65"
  },
  {
    "question": "Lệnh nào trong các lệnh sau cho phép đã chuyển tới 1 nơi nào đó đã được gán nhãn",
    "options": [
      "break",
      "goto",
      "continue",
      "exit"
    ],
    "answer": "goto"
  },
  {
    "question": "Sử dụng cách truyền nào trong hàm sẽ không làm thay đổi giá trị của biến trong chương trình chính",
    "options": [
      "Truyền bằng tham trị",
      "Truyền bằng giá trị địa chỉ của tham số",
      "Cả 2 đều đúng",
      "Cả 2 đều sai"
    ],
    "answer": "Truyền bằng tham trị"
  },
  {
    "question": "Xâu định dạng nào dưới đây dùng để in ra 1 số thực có độ chính xác đơn",
    "options": [
      "\"%u\"",
      "\"%e\"",
      "\"%f\"",
      "\"%o\""
    ],
    "answer": "\"%f\""
  },
  {
    "question": "Kết quả trả về của toán tử sau: Evaluate !(1 && !(0 || 1))",
    "options": [
      "1",
      "0",
      "Không xác định"
    ],
    "answer": "1"
  },
  {
    "question": "Cho a=3, b=2 và c là 3 biến nguyên. Biểu thức nào sau viết sai cú pháp trong ngôn ngữ lập trình C",
    "options": [
      "(c=a&b)",
      "(c=a&&b)",
      "(c=a/b)",
      "(c=a<<b)"
    ],
    "answer": "(c=a&b)"
  },
  {
    "question": "Đâu là phát biểu sai",
    "options": [
      "Có thể truyền tham số là 1 biến struct cho hàm",
      "Có thể truyền tham số là 1 biến con trỏ cho hàm",
      "Có thể truyền tham số là 1 biến con trỏ struct cho hàm",
      "Không thể truyền tham số là phần tử của struct cho hàm"
    ],
    "answer": "Không thể truyền tham số là phần tử của struct cho hàm"
  },
  {
    "question": "Giả sử có câu lệnh ch='A'. Vậy ch sẽ chứa bao nhiêu byte",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "1"
  },
  {
    "question": "Nếu x là một biến toàn cục và x không phải là một con trỏ thì",
    "options": [
      "Miền nhớ dành cho x có thể thay đổi trong quá trình thực hiện chương trình",
      "Miền nhớ dành cho x chỉ có thay đổi bởi những thao tác với x bên trong hàm main()",
      "Miền nhớ dành cho x sẽ thay đổi bởi những thao tác với x trong tất cả các hàm, kể cả hàm main()",
      "Miền nhớ dành cho x không bị thay đổi trong quá trình thực hiện chương trình"
    ],
    "answer": "Miền nhớ dành cho x không bị thay đổi trong quá trình thực hiện chương trình"
  },
  {
    "question": "Trong các hàm sau, hàm nào là hàm không định dạng để nhập 1 kí tự từ bàn phím",
    "options": [
      "scanf();",
      "getchar();",
      "getch();",
      "getche();"
    ],
    "answer": "getchar();"
  },
  {
    "question": "Xâu định dạng nào dưới đây dùng để in ra 1 số nguyên dài",
    "options": [
      "\"%ld\"",
      "\"%x\"",
      "\"%d\"",
      "\"%o\""
    ],
    "answer": "\"%ld\""
  },
  {
    "question": "Biến con trỏ có thể chứa",
    "options": [
      "Địa chỉ vùng nhớ của 1 biến khác",
      "Giá trị của 1 biến khác",
      "Cả 2 đều đúng",
      "Cả 2 đều sai"
    ],
    "answer": "Địa chỉ vùng nhớ của 1 biến khác"
  },
  {
    "question": "Nếu hàm được gọi trước khi nó định nghĩa thì điều kiện là gì",
    "options": [
      "Kiểu trả về của hàm phải là kiểu void",
      "Kiều đầu vào của hàm phải là kiểu void",
      "Trước khi gọi hàm nó phải được khai báo",
      "Hàm chỉ trả về kiểu dữ liệu boolean"
    ],
    "answer": "Trước khi gọi hàm nó phải được khai báo"
  },
  {
    "question": "Những tên biến nào dưới đây được viết đúng theo quy tắc đặt tên của ngôn ngữ lập trình C?",
    "options": [
      "diem toan",
      "3diemtoan",
      "_diemtoan",
      "-diemtoan"
    ],
    "answer": "_diemtoan"
  },
  {
    "question": "Xâu định dạng nào dưới đây dùng để in ra 1 số nguyên hệ 16",
    "options": [
      "\"%d\"",
      "\"%x\"",
      "\"%i\"",
      "\"%u\""
    ],
    "answer": "\"%x\""
  },
  {
    "question": "Trong các hàm sau, hàm nào là hàm không định dạng để in 1 chuỗi kí tự ra màn hình",
    "options": [
      "puts()",
      "printf()",
      "scanf()",
      "gets()"
    ],
    "answer": "puts()"
  },
  {
    "question": "Trong các hàm sau, hàm nào để nhập 1 kí tự từ bàn phím ngay sau khi gõ, không chờ nhấn Enter và không hiện ra màn hình",
    "options": [
      "scanf();",
      "getchar();",
      "getch();",
      "getche();"
    ],
    "answer": "getch();"
  },
  {
    "question": "Xâu định dạng nào dưới đây dùng để in ra 1 xâu kí tự",
    "options": [
      "\"%f\"",
      "\"%x\"",
      "\"%s\"",
      "\"%c\""
    ],
    "answer": "\"%s\""
  },
  {
    "question": "Xâu định dạng nào dưới đây dùng để in ra 1 kí tự",
    "options": [
      "\"%f\"",
      "\"%x\"",
      "\"%s\"",
      "\"%c\""
    ],
    "answer": "\"%c\""
  },
  {
    "question": "Xâu định dạng nào dưới đây dùng để in ra 1 số nguyên ở hệ 8",
    "options": [
      "\"%ld\"",
      "\"%x\"",
      "\"%o\"",
      "\"%u\""
    ],
    "answer": "\"%o\""
  },
  {
    "question": "Số màu có thể biểu diễn trong chế độ đồ hoạ do yếu tố nào quy định",
    "options": [
      "Số bit tương ứng với 1 pixel",
      "Độ phân giải màn hình",
      "Do kích thước màn hình",
      "Không phải 3 yếu tố trên"
    ],
    "answer": "Số bit tương ứng với 1 pixel"
  },
  {
    "question": "Trong ngôn ngữ C, khai báo \"int array[3][5]\" có nghĩa là",
    "options": [
      "Các phần tử của mảng là các số nguyên",
      "Là 1 mảng 2 chiều tối đa là 15 phần tử và mỗi phần tử là 1 số nguyên",
      "array[3][5] là 1 phần tử của mảng",
      "Tất cả đều sai"
    ],
    "answer": "Là 1 mảng 2 chiều tối đa là 15 phần tử và mỗi phần tử là 1 số nguyên"
  },
  {
    "question": "Cho biết giá trị của biểu thức 5>1",
    "options": [
      "-1",
      "0",
      "1"
    ],
    "answer": "1"
  },
  {
    "question": "Xâu định dạng nào dưới đây dùng để in ra địa chỉ của 1 biến",
    "options": [
      "\"%u\"",
      "\"%e\"",
      "\"%o\"",
      "\"%p\""
    ],
    "answer": "\"%p\""
  },
  {
    "question": "Xâu định dạng nào dưới đây dùng để in ra 1 số nguyên",
    "options": [
      "\"%u\"",
      "\"%e\"",
      "\"%d\"",
      "\"%p\""
    ],
    "answer": "\"%d\""
  },
  {
    "question": "Giả sử a và b là 2 số thực. Biểu thức nào dưới đây là không được phép",
    "options": [
      "(a+=b)",
      "(a-=b)",
      "(a>>=b)",
      "(a*=b)"
    ],
    "answer": "(a>>=b)"
  },
  {
    "question": "Hàm duy nhất mà tất cả các chương trình C phải chứa là gì?",
    "options": [
      "start()",
      "system()",
      "main()",
      "program()"
    ],
    "answer": "main()"
  },
  {
    "question": "Xâu định dạng nào dưới đây dùng để in ra 1 số thực có độ chính xác kép",
    "options": [
      "\"%u\"",
      "\"%e\"",
      "\"%o\"",
      "\"%p\""
    ],
    "answer": "\"%e\""
  },
  {
    "question": "Giả sử có câu lệnh ch[]=\"A\". ch chứa bao nhiêu bytes",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "2"
  },
  {
    "question": "Lệnh nào trong các lệnh sau cho phép chuyển sang vòng lặp tiếp theo mà không cần phải thực hiện phần còn lại của vòng lặp",
    "options": [
      "break",
      "goto",
      "continue",
      "return"
    ],
    "answer": "continue"
  },
  {
    "question": "Trong chế độ 256 màu, số bit cho mỗi pixel là",
    "options": [
      "2",
      "6",
      "8",
      "10"
    ],
    "answer": "8"
  },
  {
    "question": "Ngôn ngữ lập trình nào dưới đây là ngôn ngữ lập trình có cấu trúc?",
    "options": [
      "Ngôn ngữ Assembler",
      "Ngôn ngữ C và Pascal",
      "Ngôn ngữ Cobol",
      "Cả 3 ý trên"
    ],
    "answer": "Ngôn ngữ C và Pascal"
  },
  {
    "question": "Dữ liệu kí tự bao gồm",
    "options": [
      "Các kí tự số chữ số",
      "Các kí tự chữ cái",
      "Các kí tự đặc biệt",
      "Cả 3 ý trên"
    ],
    "answer": "Cả 3 ý trên"
  },
  {
    "question": "Hàm nào đọc kí tự từ bàn phím ngay sau khi gõ, không chờ nhấn Enter. Các kí tự có hiện ra màn hình",
    "options": [
      "scanf();",
      "getchar();",
      "getch();",
      "getche();"
    ],
    "answer": "getche();"
  },
  {
    "question": "Kiểu dữ liệu nào dưới đây không được coi là kiểu dữ liệu cơ bản trong ngôn ngữ lập trình C",
    "options": [
      "Kiểu mảng",
      "Kiểu enum",
      "Kiểu short int",
      "Kiểu unsigned"
    ],
    "answer": "Kiểu mảng"
  },
  {
    "question": "Cho mảng A gồm các phần tử kiểu struct, phát biểu nào là đúng khi truy cập đến các trường của các phần tử",
    "options": [
      "A[chỉ số].tên_trường",
      "A.tên_trường",
      "&A.tên_trường",
      "&A[chỉ số].tên_trường"
    ],
    "answer": "A[chỉ số].tên_trường"
  },
  {
    "question": "Kiểu dữ liệu nào dưới đây được coi là kiểu dữ liệu cơ bản trong ngôn ngữ lập trình C",
    "options": [
      "Kiểu double",
      "Kiểu con trỏ",
      "Kiểu hợp",
      "Kiểu mảng"
    ],
    "answer": "Kiểu double"
  }
]