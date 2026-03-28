Based on the Go programming language, here are more than 100 questions following the TOON format.

🐹 TOPIC: GO LANGUAGE FUNDAMENTALS
1. Who created the Go language?
A) Google (Rob Pike, Ken Thompson, Robert Griesemer)
B) Microsoft
C) Facebook
D) Apple
Resposta: A

2. In what year was Go publicly announced?
A) 2009
B) 2005
C) 2012
D) 2015
Resposta: A

3. Go is a:
A) Compiled and statically typed language
B) Interpreted and dynamically typed
C) Compiled and dynamically typed
D) Interpreted and statically typed
Resposta: A

4. What is the Go file extension?
A) .go
B) .golang
C) .go-lang
D) .g
Resposta: A

5. Go compiler produces:
A) Native executable binaries
B) Bytecode
C) Intermediate code
D) Optimized source code
Resposta: A

🏗️ TOPIC: SYNTAX AND BASIC STRUCTURE
6. How do you declare a variable in Go?
A) var name type
B) type name
C) name := type
D) declare name type
Resposta: A

7. What is the correct way to declare multiple variables?
A) var x, y, z int
B) int x, y, z
C) x, y, z := int
D) var int x, y, z
Resposta: A

8. How do you comment multiple lines in Go?
A) /* comment */
B) // comment //
C) # comment #
D) <!-- comment -->
Resposta: A

9. What is the entry point of a Go program?
A) func main()
B) func start()
C) func init()
D) func run()
Resposta: A

10. How do you import a package in Go?
A) import "package"
B) include "package"
C) using package
D) require "package"
Resposta: A

📦 TOPIC: PACKAGES AND MODULES
11. What is a package in Go?
A) Collection of Go files in same directory
B) Single Go file
C) External library
D) Executable
Resposta: A

12. Which package is the entry point for executables?
A) main
B) init
C) start
D) entry
Resposta: A

13. How do you use an alias when importing?
A) import alias "package"
B) import "package" as alias
C) from package import alias
D) using alias from "package"
Resposta: A

14. Go modules were introduced in which version?
A) Go 1.11
B) Go 1.0
C) Go 1.5
D) Go 2.0
Resposta: A

15. Which file defines a Go module?
A) go.mod
B) module.go
C) go.module
D) dependencies.json
Resposta: A

🔧 TOPIC: DATA TYPES
16. What is the default integer type in Go?
A) int
B) int32
C) int64
D) integer
Resposta: A

17. How do you declare a string in Go?
A) var s string
B) string s
C) s := string
D) var s = string
Resposta: A

18. What is the difference between make and new?
A) make creates slices/maps/channels, new allocates zero memory
B) make is for primitive types
C) new is for complex types
D) No difference
Resposta: A

19. How do you declare a boolean in Go?
A) var b bool
B) boolean b
C) b := bool
D) var b = bool
Resposta: A

20. What is the floating point type in Go?
A) float64
B) float
C) decimal
D) double
Resposta: A

🔗 TOPIC: STRUCTS AND INTERFACES
21. What is a struct in Go?
A) Collection of named fields
B) A class
C) An object
D) An interface
Resposta: A

22. How do you define a struct?
A) type Name struct { field type }
B) struct Name { field type }
C) class Name { field type }
D) object Name { field type }
Resposta: A

23. What is an interface in Go?
A) Set of method signatures
B) An abstract class
C) A generic type
D) A module
Resposta: A

24. How does Go implement interfaces?
A) Implicitly (duck typing)
B) Explicitly with implements
C) Only with inheritance
D) Only with composition
Resposta: A

25. Empty interface {} represents:
A) Any type
B) No type
C) Only nil
D) Only pointers
Resposta: A

🔄 TOPIC: FUNCTIONS AND METHODS
26. How do you define a function in Go?
A) func name(param type) return { }
B) function name(param type) return { }
C) def name(param type) return { }
D) method name(param type) return { }
Resposta: A

27. How do you define multiple returns?
A) func name() (type1, type2) { }
B) func name() type1, type2 { }
C) func name() (type1, type2, error) { }
D) func name() return type1, type2 { }
Resposta: A

28. What is a method in Go?
A) Function with receiver
B) Static function
C) Private function
D) Public function
Resposta: A

29. How do you define a method?
A) func (r *Type) name() { }
B) method (r *Type) name() { }
C) func Type.name() { }
D) def Type.name() { }
Resposta: A

30. Anonymous functions in Go are:
A) Closures that can be assigned to variables
B) Only for callbacks
C) Only for events
D) Only for async
Resposta: A

🔀 TOPIC: CONTROL FLOW
31. What is the syntax of for loop in Go?
A) for condition { }
B) for (condition) { }
C) while condition { }
D) loop condition { }
Resposta: A

32. How do you do a for range in Go?
A) for index, value := range slice { }
B) for range index, value in slice { }
C) foreach value in slice { }
D) for slice.each(value) { }
Resposta: A

33. What is the syntax of if in Go?
A) if condition { }
B) if (condition) { }
C) if condition then { }
D) if condition do { }
Resposta: A

34. How do you do if with initialization in Go?
A) if x := getValue(); x > 0 { }
B) if x := getValue() and x > 0 { }
C) if x := getValue() { if x > 0 { } }
D) if let x = getValue(); x > 0 { }
Resposta: A

35. What is the syntax of switch in Go?
A) switch value { case: }
B) switch (value) { case: }
C) switch value { case value: }
D) switch on value { case: }
Resposta: A

📦 TOPIC: SLICES AND ARRAYS
36. What is the difference between array and slice?
A) Array has fixed size, slice is dynamic
B) Slice has fixed size, array is dynamic
C) They are equal
D) Array is faster
Resposta: A

37. How do you create a slice in Go?
A) []type{value1, value2}
B) slice type{value1, value2}
C) [type]{value1, value2}
D) array type{value1, value2}
Resposta: A

38. How do you add elements to a slice?
A) append(slice, element)
B) slice.add(element)
C) slice.push(element)
D) slice.insert(element)
Resposta: A

39. How do you get the length of a slice?
A) len(slice)
B) size(slice)
C) length(slice)
D) count(slice)
Resposta: A

40. How do you create a slice with make?
A) make([]type, size, capacity)
B) make(slice type, size)
C) new([]type, size)
D) create([]type, size)
Resposta: A

🗺️ TOPIC: MAPS
41. What is a map in Go?
A) Collection of key-value pairs
B) An associative array
C) A dictionary
D) All of the above
Resposta: D

42. How do you declare a map in Go?
A) map[keyType]valueType
B) map<keyType, valueType>
C) dictionary[keyType]valueType
D) hash[keyType]valueType
Resposta: A

43. How do you create a map with make?
A) make(map[keyType]valueType)
B) make(map keyType valueType)
C) new(map[keyType]valueType)
D) create(map[keyType]valueType)
Resposta: A

44. How do you add value to a map?
A) map[key] = value
B) map.add(key, value)
C) map.set(key, value)
D) map.insert(key, value)
Resposta: A

45. How do you check if key exists in map?
A) value, ok := map[key]
B) map.exists(key)
C) map.has(key)
D) map.contains(key)
Resposta: A

🔗 TOPIC: POINTERS AND MEMORY
46. What is a pointer in Go?
A) Variable that stores memory address
B) Reference to object
C) Alias to variable
D) Copy of variable
Resposta: A

47. How do you declare a pointer?
A) var p *type
B) pointer p type
C) p := &type
D) var p = &type
Resposta: A

48. How do you get address of variable?
A) &variable
B) *variable
C) address(variable)
D) ref(variable)
Resposta: A

49. How do you access value through pointer?
A) *pointer
B) pointer.value
C) pointer->value
D) pointer^value
Resposta: A

50. Go has garbage collection?
A) Yes, automatic
B) No, manual
C) Only for pointers
D) Only for structs
Resposta: A

🔀 TOPIC: GOROUTINES AND CONCURRENCY
51. What is a goroutine?
A) Lightweight thread managed by Go runtime
B) Operating system thread
C) Separate process
D) Fiber
Resposta: A

52. How do you start a goroutine?
A) go function()
B) goroutine function()
C) async function()
D) spawn function()
Resposta: A

53. What is a channel in Go?
A) Type for communication between goroutines
B) Memory buffer
C) Message queue
D) Pipe
Resposta: A

54. How do you create a channel?
A) make(chan type)
B) channel type
C) make(channel type)
D) new(chan type)
Resposta: A

55. How do you send data to a channel?
A) channel <- value
B) channel.send(value)
C) channel.push(value)
D) channel.write(value)
Resposta: A

🔒 TOPIC: SYNC AND MUTEX
56. What is sync.Mutex used for?
A) Mutual exclusion to protect shared data
B) Synchronizing goroutines
C) Controlling concurrency
D) All of the above
Resposta: D

57. How do you use a mutex?
A) mutex.Lock() / mutex.Unlock()
B) mutex.lock() / mutex.unlock()
C) mutex.acquire() / mutex.release()
D) mutex.enter() / mutex.exit()
Resposta: A

58. What is sync.RWMutex?
A) Mutex with multiple readers
B) Recursive mutex
C) Timed mutex
D) Distributed mutex
Resposta: A

59. What is sync.WaitGroup used for?
A) Waiting for multiple goroutines to finish
B) Synchronizing goroutines
C) Controlling concurrency
D) Limiting goroutines
Resposta: A

60. How do you use WaitGroup?
A) wg.Add() / wg.Done() / wg.Wait()
B) wg.start() / wg.finish() / wg.wait()
C) wg.begin() / wg.end() / wg.await()
D) wg.inc() / wg.dec() / wg.wait()
Resposta: A

⏱️ TOPIC: CONTEXT AND TIMEOUTS
61. What is the context package used for?
A) Managing deadlines, cancellation, and values
B) Only for timeouts
C) Only for cancellation
D) Only for logging
Resposta: A

62. How do you create a context with timeout?
A) context.WithTimeout(parent, duration)
B) context.Timeout(parent, duration)
C) context.NewTimeout(duration)
D) context.CreateTimeout(duration)
Resposta: A

63. How do you cancel a context?
A) context.CancelFunc
B) context.Cancel()
C) context.Stop()
D) context.Abort()
Resposta: A

64. How do you pass context to function?
A) As first parameter
B) As last parameter
C) As global variable
D) Don't pass
Resposta: A

65. context.Value() is used for:
A) Passing request-scoped data
B) Only for logging
C) Only for tracing
D) Only for configuration
Resposta: A

🔧 TOPIC: ERROR HANDLING
66. How does Go handle errors?
A) As returned values
B) As exceptions
C) As null pointers
D) As panic
Resposta: A

67. What is the convention for returning error?
A) (result, error)
B) (error, result)
C) result, error
D) error, result
Resposta: A

68. How do you create an error in Go?
A) errors.New("message")
B) error.New("message")
C) new.Error("message")
D) Error("message")
Resposta: A

69. How do you check if there's an error?
A) if err != nil
B) if error != null
C) if err != undefined
D) if !err
Resposta: A

70. fmt.Errorf is used for:
A) Formatted errors
B) Only for logging
C) Only for debugging
D) Only for warnings
Resposta: A

📝 TOPIC: TESTING
71. What is the convention for test files in Go?
A) file_test.go
B) test_file.go
C) file.testing.go
D) file.spec.go
Resposta: A

72. What is the test function?
A) func TestName(t *testing.T)
B) func testName()
C) func TestName()
D) func NameTest()
Resposta: A

73. How do you use assert in Go tests?
A) No asserts, use t.Errorf
B) assert.Equal()
C) expect().toEqual()
D) should.Equal()
Resposta: A

74. How do you run tests in Go?
A) go test
B) go run test
C) go testing
D) go execute test
Resposta: A

75. Table-driven tests use:
A) Slice of structs with test cases
B) Multiple test functions
C) Nested loops
D) Switch statements
Resposta: A

🏗️ TOPIC: BUILD AND COMPILATION
76. How do you compile a Go program?
A) go build
B) go compile
C) go make
D) go run
Resposta: A

77. How do you run a Go program?
A) go run file.go
B) go execute file.go
C) go start file.go
D) go file.go
Resposta: A

78. How do you create an executable with specific name?
A) go build -o name
B) go build -output name
C) go build -exe name
D) go build -target name
Resposta: A

79. go mod init creates:
A) New Go module
B) New package
C) New project
D) New repository
Resposta: A

80. go get installs:
A) Module dependencies
B) System packages
C) Global binaries
D) Build tools
Resposta: A

🌐 TOPIC: WEB AND HTTP
81. Which package is used for HTTP server in Go?
A) net/http
B) http/net
C) web/http
D) server/http
Resposta: A

82. How do you create an HTTP server?
A) http.ListenAndServe(":8080", handler)
B) http.Server(":8080", handler)
C) http.Start(":8080", handler)
D) http.Run(":8080", handler)
Resposta: A

83. What is an http.Handler?
A) Interface with ServeHTTP method
B) Middleware function
C) Request structure
D) Response type
Resposta: A

84. How do you define an HTTP route?
A) http.HandleFunc("/path", handler)
B) http.Route("/path", handler)
C) http.Path("/path", handler)
D) http.Endpoint("/path", handler)
Resposta: A

85. How do you read query parameters?
A) r.URL.Query()
B) r.Params()
C) r.QueryParams()
D) r.GetQuery()
Resposta: A

📊 TOPIC: JSON AND ENCODING
86. Which package is used for JSON in Go?
A) encoding/json
B) json/encoding
C) json/encode
D) encode/json
Resposta: A

87. How do you marshal struct to JSON?
A) json.Marshal(struct)
B) struct.ToJSON()
C) json.Encode(struct)
D) struct.MarshalJSON()
Resposta: A

88. How do you unmarshal JSON to struct?
A) json.Unmarshal(data, &struct)
B) struct.FromJSON(data)
C) json.Decode(data, &struct)
D) struct.UnmarshalJSON(data)
Resposta: A

89. What are JSON tags in structs?
A) `json:"name"`
B) `json:name`
C) `json="name"`
D) `json(name)`
Resposta: A

90. How do you ignore field in JSON?
A) `json:"-"`
B) `json:"ignore"`
C) `json:"skip"`
D) `json:"omit"`
Resposta: A

🗄️ TOPIC: DATABASE AND SQL
91. Which package is standard for SQL in Go?
A) database/sql
B) sql/database
C) db/sql
D) sql/driver
Resposta: A

92. How do you open SQL connection?
A) sql.Open("driver", "dsn")
B) db.Open("driver", "dsn")
C) sql.Connect("driver", "dsn")
D) db.Connect("driver", "dsn")
Resposta: A

93. How do you execute SQL query?
A) db.Query("SELECT...")
B) db.Execute("SELECT...")
C) db.Run("SELECT...")
D) db.Do("SELECT...")
Resposta: A

94. How do you prevent SQL injection?
A) Prepared statements
B) String escaping
C) Input validation
D) Parameter encoding
Resposta: A

95. db.Prepare() creates:
A) Reusable prepared statement
B) New connection
C) Transaction
D) Connection pool
Resposta: A

🔧 TOPIC: REFLECTION AND TYPE SYSTEM
96. Which package is used for reflection in Go?
A) reflect
B) runtime
C) type
D) meta
Resposta: A

97. How do you get type of variable?
A) reflect.TypeOf(variable)
B) variable.Type()
C) type.Of(variable)
D) meta.Type(variable)
Resposta: A

98. reflect.Value() represents:
A) Value of a variable
B) Type of variable
C) Memory address
D) Size of variable
Resposta: A

99. How do you check if type implements interface?
A) reflect.TypeOf().Implements()
B) type.Implements()
C) interface.Check()
D) implements.Type()
Resposta: A

100. Reflection in Go is:
A) Powerful but with performance impact
B) Fast and efficient
C) Not recommended
D) Only for debugging
Resposta: A

🎯 TOPIC: ADVANCED FEATURES
101. Generics were introduced in which version?
A) Go 1.18
B) Go 1.20
C) Go 2.0
D) Go 1.16
Resposta: A

102. How do you define generic type?
A) [T any]
B) <T>
C) <T extends>
D) [T interface{}]
Resposta: A

103. any is alias for:
A) interface{}
B) any type
C) generic type
D) all types
Resposta: A

104. How do you use generic type in function?
A) func name[T any](param T) T
B) func name<T>(param T) T
C) func name[T](param T) T
D) func name[T any](param T) T
Resposta: A

105. comparable constraint is used for:
A) Types that can be compared
B) Only numbers
C) Only strings
D) Only structs
Resposta: A

🏗️ TOPIC: PATTERNS AND IDIOMS
106. How do you implement singleton in Go?
A) sync.Once
B) Global variable
C) Constructor pattern
D) Factory pattern
Resposta: A

107. Functional options pattern is used for:
A) Flexible struct configuration
B) Only for builders
C) Only for factories
D) Only for singletons
Resposta: A

108. How do you implement builder in Go?
A) Methods returning *Builder
B) Constructor chaining
C) Method chaining
D) Fluent interface
Resposta: A

109. defer is used for:
A) Executing code before returning
B) Only for cleanup
C) Only for logging
D) Only for errors
Resposta: A

110. panic/recover is used for:
A) Exceptional error handling
B) Normal error handling
C) Error logging
D) Debugging
Resposta: A

📚 TOPIC: STANDARD LIBRARY
111. fmt package is used for:
A) I/O formatting
B) Only for printing
C) Only for scanning
D) Only for logging
Resposta: A

112. os package provides:
A) Operating system functionality
B) Only for files
C) Only for environment
D) Only for signals
Resposta: A

113. io package defines:
A) Basic I/O interfaces
B) Only for files
C) Only for network
D) Only for buffers
Resposta: A

114. strings package provides:
A) String manipulation functions
B) Only for parsing
C) Only for formatting
D) Only for validation
Resposta: A

115. time package is used for:
A) Time measurement and formatting
B) Only for delays
C) Only for timestamps
D) Only for durations
Resposta: A

🔍 TOPIC: DEBUGGING AND PROFILING
116. How do you debug in Go?
A) delve debugger
B) gdb
C) print statements
D) logging
Resposta: A

117. pprof is used for:
A) Performance profiling
B) Memory debugging
C) CPU analysis
D) All of the above
Resposta: D

118. go vet checks:
A) Suspicious constructs
B) Syntax errors
C) Runtime errors
D) Logic errors
Resposta: A

119. go fmt formats:
A) Source code automatically
B) Only indentation
C) Only imports
D) Only comments
Resposta: A

120. race detector detects:
A) Race conditions in goroutines
B) Memory leaks
C) Deadlocks
D) Performance issues
Resposta: A

🌐 TOPIC: NETWORKING
121. net/http package supports:
A) HTTP client and server
B) Only server
C) Only client
D) Only HTTPS
Resposta: A

122. How do you make HTTP request?
A) http.Get(url)
B) http.Request(url)
C) http.Fetch(url)
D) http.Call(url)
Resposta: A

123. tcp listener is created with:
A) net.Listen("tcp", addr)
B) net.TCP(addr)
C) net.ListenTCP(addr)
D) net.CreateTCP(addr)
Resposta: A

124. How do you read from connection?
A) conn.Read(buffer)
B) conn.Receive(buffer)
C) conn.Get(buffer)
D) conn.Accept(buffer)
Resposta: A

125. TLS is supported via:
A) crypto/tls package
B) net/tls package
C) security/tls package
D) tls/net package
Resposta: A

📊 TOPIC: PERFORMANCE AND OPTIMIZATION
126. How do you measure performance in Go?
A) testing.B for benchmarks
B) time.Now() for timing
C) pprof for profiling
D) All of the above
Resposta: D

127. How do you optimize memory allocation?
A) Object pooling with sync.Pool
B) Increasing GC
C) Reducing pointers
D) Using stacks
Resposta: A

128. How do you reduce garbage collection pressure?
A) Reusing objects
B) Increasing memory
C) Calling GC manually
D) Using fewer goroutines
Resposta: A

129. escape analysis determines:
A) If variable escapes to heap
B) Function performance
C) Memory leaks
D) CPU usage
Resposta: A

130. How do you profile memory usage?
A) go tool pprof -allocs
B) go tool mem
C) go tool memory
D) go tool heap
Resposta: A

🔧 TOPIC: TOOLCHAIN AND BUILD TOOLS
131. go install installs:
A) Binaries in GOPATH/bin
B) Local packages
C) Dependencies
D) Modules
Resposta: A

132. go list shows:
A) Information about packages/modules
B) Only versions
C) Only dependencies
D) Only sources
Resposta: A

133. go mod tidy:
A) Cleans unused dependencies
B) Updates dependencies
C) Installs dependencies
D) Removes module
Resposta: A

134. go work creates:
A) Workspace with multiple modules
B) New workspace
C) Multi-module project
D) Shared workspace
Resposta: A

135. go version shows:
A) Installed Go version
B) Only compiler version
C) Only runtime version
D) Only toolchain version
Resposta: A

🎯 TOPIC: BEST PRACTICES
136. What is the convention for names in Go?
A) CamelCase for exported, camelCase for unexported
B) snake_case always
C) PascalCase always
D) kebab-case always
Resposta: A

137. How do you document Go code?
A) Comments above declarations
B) README files
C) Javadoc style
D) XML documentation
Resposta: A

138. godoc generates:
A) Documentation from comments
B) API docs
C) Manual pages
D) HTML docs
Resposta: A

139. How do you handle errors in Go?
A) Explicitly, without exceptions
B) With try-catch
C) With null checks
D) With assertions
Resposta: A

140. What is the convention for package names?
A) Lowercase, single word
B) CamelCase
C) snake_case
D) kebab-case
Resposta: A

🚀 TOPIC: ECOSYSTEM AND COMMUNITY
141. Go playground allows:
A) Running Go code in browser
B) Only for testing
C) Only for learning
D) Only for sharing
Resposta: A

142. golang.org is:
A) Official language website
B) Community blog
C) Discussion forum
D) Code repository
Resposta: A

143. Effective Go is:
A) Best practices guide
B) Basic tutorial
C) Complete reference
D) Go book
Resposta: A

144. Go modules replace:
A) GOPATH system
B) Vendor directory
C) Glide
D) Dep
Resposta: A

145. Go 1.0 was released in:
A) 2012
B) 2009
C) 2015
D) 2010
Resposta: A

🔧 TOPIC: COMPILER AND RUNTIME
146. Go compiler is written in:
A) Go
B) C
C) C++
D) Assembly
Resposta: A

147. Go runtime manages:
A) Goroutines, garbage collection, scheduling
B) Only memory
C) Only threads
D) Only I/O
Resposta: A

148. Go uses:
A) Static linking by default
B) Dynamic linking
C) Mixed linking
D) No linking
Resposta: A

149. Go garbage collector is:
A) Concurrent, generational, low-latency
B) Stop-the-world
C) Reference counting
D) Manual
Resposta: A

150. Go compiles to:
A) Multiple architectures and operating systems
B) Only Linux
C) Only Windows
D) Only macOS
Resposta: A

🎯 TEMA: FEATURES AVANÇADAS
101. Generics foram introduzidos em qual versão?
A) Go 1.18
B) Go 1.20
C) Go 2.0
D) Go 1.16
Resposta: A

102. Como se define tipo genérico?
A) [T any]
B) <T>
C) <T extends>
D) [T interface{}]
Resposta: A

103. any é alias para:
A) interface{}
B) any type
C) generic type
D) all types
Resposta: A

104. Como se usa tipo genérico em função?
A) func nome[T any](param T) T
B) func nome<T>(param T) T
C) func nome[T](param T) T
D) func nome<T any>(param T) T
Resposta: A

105. comparable constraint é usado para:
A) Tipos que podem ser comparados
B) Apenas números
C) Apenas strings
D) Apenas structs
Resposta: A

🏗️ TEMA: PATTERNS E IDIOMAS
106. Como se implementa singleton em Go?
A) sync.Once
B) Variável global
C) Constructor pattern
D) Factory pattern
Resposta: A

107. Functional options pattern é usado para:
A) Configuração flexível de structs
B) Apenas para builders
C) Apenas para factories
D) Apenas para singletons
Resposta: A

108. Como se implementa builder em Go?
A) Métodos que retornam *Builder
B) Constructor chaining
C) Method chaining
D) Fluent interface
Resposta: A

109. defer é usado para:
A) Executar código antes de retornar
B) Apenas para cleanup
C) Apenas para logging
D) Apenas para errors
Resposta: A

110. panic/recover é usado para:
A) Tratamento de erros excepcionais
B) Error handling normal
C) Logging de errors
D) Debugging
Resposta: A

📚 TEMA: STANDARD LIBRARY
111. fmt package é usado para:
A) Formatação de I/O
B) Apenas para printing
C) Apenas para scanning
D) Apenas para logging
Resposta: A

112. os package fornece:
A) Funcionalidades do sistema operacional
B) Apenas para files
C) Apenas para environment
D) Apenas para signals
Resposta: A

113. io package define:
A) Interfaces básicas de I/O
B) Apenas para files
C) Apenas para network
D) Apenas para buffers
Resposta: A

114. strings package fornece:
A) Funções para manipulação de strings
B) Apenas para parsing
C) Apenas para formatting
D) Apenas para validation
Resposta: A

115. time package é usado para:
A) Medição e formatação de tempo
B) Apenas para delays
C) Apenas para timestamps
D) Apenas para durations
Resposta: A

🔍 TEMA: DEBUGGING E PROFILING
116. Como se faz debugging em Go?
A) delve debugger
B) gdb
C) print statements
D) logging
Resposta: A

117. pprof é usado para:
A) Performance profiling
B) Memory debugging
C) CPU analysis
D) Todas as alternativas
Resposta: D

118. go vet verifica:
A) Suspicious constructs
B) Syntax errors
C) Runtime errors
D) Logic errors
Resposta: A

119. go fmt formata:
A) Source code automaticamente
B) Apenas indentation
C) Apenas imports
D) Apenas comments
Resposta: A

120. race detector detecta:
A) Race conditions em goroutines
B) Memory leaks
C) Deadlocks
D) Performance issues
Resposta: A

🌐 TEMA: NETWORKING
121. net/http package suporta:
A) Client e server HTTP
B) Apenas server
C) Apenas client
D) Apenas HTTPS
Resposta: A

122. Como se faz HTTP request?
A) http.Get(url)
B) http.Request(url)
C) http.Fetch(url)
D) http.Call(url)
Resposta: A

123. tcp listener é criado com:
A) net.Listen("tcp", addr)
B) net.TCP(addr)
C) net.ListenTCP(addr)
D) net.CreateTCP(addr)
Resposta: A

124. Como se lê de connection?
A) conn.Read(buffer)
B) conn.Receive(buffer)
C) conn.Get(buffer)
D) conn.Accept(buffer)
Resposta: A

125. TLS é suportado via:
A) crypto/tls package
B) net/tls package
C) security/tls package
D) tls/net package
Resposta: A

📊 TEMA: PERFORMANCE E OTIMIZAÇÃO
126. Como se mede performance em Go?
A) testing.B para benchmarks
B) time.Now() para timing
C) pprof para profiling
D) Todas as alternativas
Resposta: D

127. Como se otimiza alocação de memória?
A) Object pooling com sync.Pool
B) Aumentando GC
C) Reduzindo pointers
D) Usando stacks
Resposta: A

128. Como se reduz garbage collection pressure?
A) Reusando objetos
B) Aumentando memória
C) Chamando GC manualmente
D) Usando menos goroutines
Resposta: A

129. escape analysis determina:
A) Se variável escapa para heap
B) Performance de funções
C) Memory leaks
D) CPU usage
Resposta: A

130. Como se profile memory usage?
A) go tool pprof -allocs
B) go tool mem
C) go tool memory
D) go tool heap
Resposta: A

🔧 TEMA: TOOLCHAIN E BUILD TOOLS
131. go install instala:
A) Binários no GOPATH/bin
B) Packages localmente
C) Dependências
D) Módulos
Resposta: A

132. go list mostra:
A) Informações sobre packages/módulos
B) Apenas versões
C) Apenas dependências
D) Apenas sources
Resposta: A

133. go mod tidy:
A) Limpa dependências não usadas
B) Atualiza dependências
C) Instala dependências
D) Remove módulo
Resposta: A

134. go work cria:
A) Workspace com múltiplos módulos
B) Novo workspace
C) Multi-module project
D) Shared workspace
Resposta: A

135. go version mostra:
A) Versão do Go instalada
B) Apenas do compilador
C) Apenas do runtime
D) Apenas do toolchain
Resposta: A

🎯 TEMA: BEST PRACTICES
136. Qual é a convenção para nomes em Go?
A) CamelCase para exportado, camelCase para não exportado
B) snake_case sempre
C) PascalCase sempre
D) kebab-case sempre
Resposta: A

137. Como se documenta código Go?
A) Comments acima de declarações
B) Arquivos README
C) Javadoc style
D) XML documentation
Resposta: A

138. godoc gera:
A) Documentação a partir de comments
B) API docs
C) Manual pages
D) HTML docs
Resposta: A

139. Como se handle errors em Go?
A) Explicitamente, sem exceções
B) Com try-catch
C) Com null checks
D) Com assertions
Resposta: A

140. Qual é a convenção para package names?
A) Lowercase, single word
B) CamelCase
C) snake_case
D) kebab-case
Resposta: A

🚀 TEMA: ECOSISTEMA E COMUNIDADE
141. Go playground permite:
A) Executar código Go no browser
B) Apenas para testing
C) Apenas para learning
D) Apenas para sharing
Resposta: A

142. golang.org é:
A) Site oficial da linguagem
B) Blog da comunidade
C) Fórum de discussão
D) Repositório de código
Resposta: A

143. Effective Go é:
A) Guia de boas práticas
B) Tutorial básico
C) Reference completa
D) Book sobre Go
Resposta: A

144. Go modules substituem:
A) GOPATH system
B) Vendor directory
C) Glide
D) Dep
Resposta: A

145. Go 1.0 foi lançado em:
A) 2012
B) 2009
C) 2015
D) 2010
Resposta: A

🔧 TEMA: COMPILADOR E RUNTIME
146. Go compiler é escrito em:
A) Go
B) C
C) C++
D) Assembly
Resposta: A

147. Go runtime gerencia:
A) Goroutines, garbage collection, scheduling
B) Apenas memory
C) Apenas threads
D) Apenas I/O
Resposta: A

148. Go usa:
A) Static linking por padrão
B) Dynamic linking
C) Mixed linking
D) No linking
Resposta: A

149. Go garbage collector é:
A) Concurrent, generational, low-latency
B) Stop-the-world
C) Reference counting
D) Manual
Resposta: A

150. Go compila para:
A) Múltiplas arquiteturas e sistemas operacionais
B) Apenas Linux
C) Apenas Windows
D) Apenas macOS
Resposta: A
