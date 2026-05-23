Based on the Go programming language, here are more than 100 questions following the TOON format.

🐹 TOPIC: GO LANGUAGE FUNDAMENTALS
1. Who created the Go language?
A) Facebook
B) Microsoft
C) Google (Rob Pike, Ken Thompson, Robert Griesemer)
D) Apple
Resposta: C

2. In what year was Go publicly announced?
A) 2012
B) 2005
C) 2009
D) 2015
Resposta: C

3. Go is a:
A) Compiled and dynamically typed
B) Compiled and statically typed language
C) Interpreted and dynamically typed
D) Interpreted and statically typed
Resposta: B

4. What is the Go file extension?
A) .golang
B) .go-lang
C) .go
D) .g
Resposta: C

5. Go compiler produces:
A) Optimized source code
B) Intermediate code
C) Bytecode
D) Native executable binaries
Resposta: D

🏗️ TOPIC: SYNTAX AND BASIC STRUCTURE
6. How do you declare a variable in Go?
A) var name type
B) declare name type
C) name := type
D) type name
Resposta: A

7. What is the correct way to declare multiple variables?
A) var x, y, z int
B) x, y, z := int
C) var int x, y, z
D) int x, y, z
Resposta: A

8. How do you comment multiple lines in Go?
A) <!-- comment -->
B) // comment //
C) /* comment */
D) # comment #
Resposta: C

9. What is the entry point of a Go program?
A) func run()
B) func main()
C) func init()
D) func start()
Resposta: B

10. How do you import a package in Go?
A) using package
B) import "package"
C) include "package"
D) require "package"
Resposta: B

📦 TOPIC: PACKAGES AND MODULES
11. What is a package in Go?
A) Collection of Go files in same directory
B) Single Go file
C) External library
D) Executable
Resposta: A

12. Which package is the entry point for executables?
A) init
B) entry
C) start
D) main
Resposta: D

13. How do you use an alias when importing?
A) using alias from "package"
B) import alias "package"
C) import "package" as alias
D) from package import alias
Resposta: B

14. Go modules were introduced in which version?
A) Go 1.5
B) Go 1.11
C) Go 1.0
D) Go 2.0
Resposta: B

15. Which file defines a Go module?
A) go.mod
B) module.go
C) go.module
D) dependencies.json
Resposta: A

🔧 TOPIC: DATA TYPES
16. What is the default integer type in Go?
A) int
B) integer
C) int64
D) int32
Resposta: A

17. How do you declare a string in Go?
A) var s = string
B) string s
C) var s string
D) s := string
Resposta: C

18. What is the difference between make and new?
A) new is for complex types
B) make is for primitive types
C) No difference
D) make creates slices/maps/channels, new allocates zero memory
Resposta: D

19. How do you declare a boolean in Go?
A) var b = bool
B) boolean b
C) var b bool
D) b := bool
Resposta: C

20. What is the floating point type in Go?
A) double
B) decimal
C) float
D) float64
Resposta: D

🔗 TOPIC: STRUCTS AND INTERFACES
21. What is a struct in Go?
A) An interface
B) A class
C) An object
D) Collection of named fields
Resposta: D

22. How do you define a struct?
A) type Name struct { field type }
B) object Name { field type }
C) class Name { field type }
D) struct Name { field type }
Resposta: A

23. What is an interface in Go?
A) An abstract class
B) A module
C) Set of method signatures
D) A generic type
Resposta: C

24. How does Go implement interfaces?
A) Explicitly with implements
B) Only with composition
C) Only with inheritance
D) Implicitly (duck typing)
Resposta: D

25. Empty interface {} represents:
A) No type
B) Only nil
C) Only pointers
D) Any type
Resposta: D

🔄 TOPIC: FUNCTIONS AND METHODS
26. How do you define a function in Go?
A) method name(param type) return { }
B) func name(param type) return { }
C) def name(param type) return { }
D) function name(param type) return { }
Resposta: B

27. How do you define multiple returns?
A) func name() (type1, type2, error) { }
B) func name() type1, type2 { }
C) func name() return type1, type2 { }
D) func name() (type1, type2) { }
Resposta: D

28. What is a method in Go?
A) Public function
B) Private function
C) Function with receiver
D) Static function
Resposta: C

29. How do you define a method?
A) method (r *Type) name() { }
B) func Type.name() { }
C) func (r *Type) name() { }
D) def Type.name() { }
Resposta: C

30. Anonymous functions in Go are:
A) Only for callbacks
B) Only for events
C) Closures that can be assigned to variables
D) Only for async
Resposta: C

🔀 TOPIC: CONTROL FLOW
31. What is the syntax of for loop in Go?
A) for (condition) { }
B) loop condition { }
C) for condition { }
D) while condition { }
Resposta: C

32. How do you do a for range in Go?
A) for index, value := range slice { }
B) for slice.each(value) { }
C) foreach value in slice { }
D) for range index, value in slice { }
Resposta: A

33. What is the syntax of if in Go?
A) if condition { }
B) if (condition) { }
C) if condition then { }
D) if condition do { }
Resposta: A

34. How do you do if with initialization in Go?
A) if let x = getValue(); x > 0 { }
B) if x := getValue() and x > 0 { }
C) if x := getValue(); x > 0 { }
D) if x := getValue() { if x > 0 { } }
Resposta: C

35. What is the syntax of switch in Go?
A) switch (value) { case: }
B) switch value { case: }
C) switch on value { case: }
D) switch value { case value: }
Resposta: B

📦 TOPIC: SLICES AND ARRAYS
36. What is the difference between array and slice?
A) Array is faster
B) Array has fixed size, slice is dynamic
C) They are equal
D) Slice has fixed size, array is dynamic
Resposta: B

37. How do you create a slice in Go?
A) [type]{value1, value2}
B) slice type{value1, value2}
C) []type{value1, value2}
D) array type{value1, value2}
Resposta: C

38. How do you add elements to a slice?
A) slice.push(element)
B) slice.insert(element)
C) slice.add(element)
D) append(slice, element)
Resposta: D

39. How do you get the length of a slice?
A) len(slice)
B) size(slice)
C) count(slice)
D) length(slice)
Resposta: A

40. How do you create a slice with make?
A) create([]type, size)
B) new([]type, size)
C) make(slice type, size)
D) make([]type, size, capacity)
Resposta: D

🗺️ TOPIC: MAPS
41. What is a map in Go?
A) An associative array
B) A dictionary
C) Collection of key-value pairs
D) All of the above
Resposta: D

42. How do you declare a map in Go?
A) hash[keyType]valueType
B) dictionary[keyType]valueType
C) map<keyType, valueType>
D) map[keyType]valueType
Resposta: D

43. How do you create a map with make?
A) make(map keyType valueType)
B) make(map[keyType]valueType)
C) new(map[keyType]valueType)
D) create(map[keyType]valueType)
Resposta: B

44. How do you add value to a map?
A) map.insert(key, value)
B) map[key] = value
C) map.add(key, value)
D) map.set(key, value)
Resposta: B

45. How do you check if key exists in map?
A) map.exists(key)
B) value, ok := map[key]
C) map.has(key)
D) map.contains(key)
Resposta: B

🔗 TOPIC: POINTERS AND MEMORY
46. What is a pointer in Go?
A) Reference to object
B) Variable that stores memory address
C) Alias to variable
D) Copy of variable
Resposta: B

47. How do you declare a pointer?
A) var p *type
B) var p = &type
C) p := &type
D) pointer p type
Resposta: A

48. How do you get address of variable?
A) *variable
B) address(variable)
C) &variable
D) ref(variable)
Resposta: C

49. How do you access value through pointer?
A) *pointer
B) pointer->value
C) pointer^value
D) pointer.value
Resposta: A

50. Go has garbage collection?
A) Yes, automatic
B) Only for pointers
C) Only for structs
D) No, manual
Resposta: A

🔀 TOPIC: GOROUTINES AND CONCURRENCY
51. What is a goroutine?
A) Separate process
B) Operating system thread
C) Fiber
D) Lightweight thread managed by Go runtime
Resposta: D

52. How do you start a goroutine?
A) go function()
B) spawn function()
C) goroutine function()
D) async function()
Resposta: A

53. What is a channel in Go?
A) Pipe
B) Memory buffer
C) Type for communication between goroutines
D) Message queue
Resposta: C

54. How do you create a channel?
A) make(channel type)
B) make(chan type)
C) channel type
D) new(chan type)
Resposta: B

55. How do you send data to a channel?
A) channel.send(value)
B) channel.push(value)
C) channel.write(value)
D) channel <- value
Resposta: D

🔒 TOPIC: SYNC AND MUTEX
56. What is sync.Mutex used for?
A) Controlling concurrency
B) All of the above
C) Mutual exclusion to protect shared data
D) Synchronizing goroutines
Resposta: B

57. How do you use a mutex?
A) mutex.lock() / mutex.unlock()
B) mutex.Lock() / mutex.Unlock()
C) mutex.acquire() / mutex.release()
D) mutex.enter() / mutex.exit()
Resposta: B

58. What is sync.RWMutex?
A) Distributed mutex
B) Recursive mutex
C) Timed mutex
D) Mutex with multiple readers
Resposta: D

59. What is sync.WaitGroup used for?
A) Controlling concurrency
B) Synchronizing goroutines
C) Waiting for multiple goroutines to finish
D) Limiting goroutines
Resposta: C

60. How do you use WaitGroup?
A) wg.start() / wg.finish() / wg.wait()
B) wg.Add() / wg.Done() / wg.Wait()
C) wg.inc() / wg.dec() / wg.wait()
D) wg.begin() / wg.end() / wg.await()
Resposta: B

⏱️ TOPIC: CONTEXT AND TIMEOUTS
61. What is the context package used for?
A) Only for logging
B) Managing deadlines, cancellation, and values
C) Only for timeouts
D) Only for cancellation
Resposta: B

62. How do you create a context with timeout?
A) context.WithTimeout(parent, duration)
B) context.NewTimeout(duration)
C) context.CreateTimeout(duration)
D) context.Timeout(parent, duration)
Resposta: A

63. How do you cancel a context?
A) context.Stop()
B) context.Cancel()
C) context.Abort()
D) context.CancelFunc
Resposta: D

64. How do you pass context to function?
A) As last parameter
B) As first parameter
C) As global variable
D) Don't pass
Resposta: B

65. context.Value() is used for:
A) Only for logging
B) Only for configuration
C) Only for tracing
D) Passing request-scoped data
Resposta: D

🔧 TOPIC: ERROR HANDLING
66. How does Go handle errors?
A) As returned values
B) As exceptions
C) As panic
D) As null pointers
Resposta: A

67. What is the convention for returning error?
A) result, error
B) error, result
C) (result, error)
D) (error, result)
Resposta: C

68. How do you create an error in Go?
A) new.Error("message")
B) errors.New("message")
C) error.New("message")
D) Error("message")
Resposta: B

69. How do you check if there's an error?
A) if !err
B) if error != null
C) if err != nil
D) if err != undefined
Resposta: C

70. fmt.Errorf is used for:
A) Only for warnings
B) Formatted errors
C) Only for debugging
D) Only for logging
Resposta: B

📝 TOPIC: TESTING
71. What is the convention for test files in Go?
A) test_file.go
B) file.spec.go
C) file.testing.go
D) file_test.go
Resposta: D

72. What is the test function?
A) func testName()
B) func NameTest()
C) func TestName()
D) func TestName(t *testing.T)
Resposta: D

73. How do you use assert in Go tests?
A) assert.Equal()
B) should.Equal()
C) expect().toEqual()
D) No asserts, use t.Errorf
Resposta: D

74. How do you run tests in Go?
A) go execute test
B) go test
C) go testing
D) go run test
Resposta: B

75. Table-driven tests use:
A) Multiple test functions
B) Switch statements
C) Slice of structs with test cases
D) Nested loops
Resposta: C

🏗️ TOPIC: BUILD AND COMPILATION
76. How do you compile a Go program?
A) go make
B) go run
C) go build
D) go compile
Resposta: C

77. How do you run a Go program?
A) go file.go
B) go execute file.go
C) go start file.go
D) go run file.go
Resposta: D

78. How do you create an executable with specific name?
A) go build -output name
B) go build -target name
C) go build -exe name
D) go build -o name
Resposta: D

79. go mod init creates:
A) New repository
B) New package
C) New project
D) New Go module
Resposta: D

80. go get installs:
A) Module dependencies
B) System packages
C) Global binaries
D) Build tools
Resposta: A

🌐 TOPIC: WEB AND HTTP
81. Which package is used for HTTP server in Go?
A) http/net
B) web/http
C) net/http
D) server/http
Resposta: C

82. How do you create an HTTP server?
A) http.Start(":8080", handler)
B) http.Server(":8080", handler)
C) http.ListenAndServe(":8080", handler)
D) http.Run(":8080", handler)
Resposta: C

83. What is an http.Handler?
A) Response type
B) Request structure
C) Middleware function
D) Interface with ServeHTTP method
Resposta: D

84. How do you define an HTTP route?
A) http.HandleFunc("/path", handler)
B) http.Endpoint("/path", handler)
C) http.Path("/path", handler)
D) http.Route("/path", handler)
Resposta: A

85. How do you read query parameters?
A) r.QueryParams()
B) r.Params()
C) r.URL.Query()
D) r.GetQuery()
Resposta: C

📊 TOPIC: JSON AND ENCODING
86. Which package is used for JSON in Go?
A) encoding/json
B) encode/json
C) json/encode
D) json/encoding
Resposta: A

87. How do you marshal struct to JSON?
A) json.Marshal(struct)
B) struct.ToJSON()
C) struct.MarshalJSON()
D) json.Encode(struct)
Resposta: A

88. How do you unmarshal JSON to struct?
A) struct.UnmarshalJSON(data)
B) json.Unmarshal(data, &struct)
C) json.Decode(data, &struct)
D) struct.FromJSON(data)
Resposta: B

89. What are JSON tags in structs?
A) `json(name)`
B) `json="name"`
C) `json:name`
D) `json:"name"`
Resposta: D

90. How do you ignore field in JSON?
A) `json:"skip"`
B) `json:"-"`
C) `json:"omit"`
D) `json:"ignore"`
Resposta: B

🗄️ TOPIC: DATABASE AND SQL
91. Which package is standard for SQL in Go?
A) sql/driver
B) database/sql
C) sql/database
D) db/sql
Resposta: B

92. How do you open SQL connection?
A) db.Open("driver", "dsn")
B) db.Connect("driver", "dsn")
C) sql.Connect("driver", "dsn")
D) sql.Open("driver", "dsn")
Resposta: D

93. How do you execute SQL query?
A) db.Run("SELECT...")
B) db.Execute("SELECT...")
C) db.Query("SELECT...")
D) db.Do("SELECT...")
Resposta: C

94. How do you prevent SQL injection?
A) Parameter encoding
B) String escaping
C) Prepared statements
D) Input validation
Resposta: C

95. db.Prepare() creates:
A) Transaction
B) New connection
C) Reusable prepared statement
D) Connection pool
Resposta: C

🔧 TOPIC: REFLECTION AND TYPE SYSTEM
96. Which package is used for reflection in Go?
A) reflect
B) type
C) meta
D) runtime
Resposta: A

97. How do you get type of variable?
A) type.Of(variable)
B) meta.Type(variable)
C) variable.Type()
D) reflect.TypeOf(variable)
Resposta: D

98. reflect.Value() represents:
A) Type of variable
B) Value of a variable
C) Memory address
D) Size of variable
Resposta: B

99. How do you check if type implements interface?
A) reflect.TypeOf().Implements()
B) type.Implements()
C) implements.Type()
D) interface.Check()
Resposta: A

100. Reflection in Go is:
A) Only for debugging
B) Not recommended
C) Fast and efficient
D) Powerful but with performance impact
Resposta: D

🎯 TOPIC: ADVANCED FEATURES
101. Generics were introduced in which version?
A) Go 1.18
B) Go 1.20
C) Go 1.16
D) Go 2.0
Resposta: A

102. How do you define generic type?
A) [T interface{}]
B) <T extends>
C) <T>
D) [T any]
Resposta: D

103. any is alias for:
A) generic type
B) interface{}
C) all types
D) any type
Resposta: B

104. How do you use generic type in function?
A) func name[T](param T) T
B) func name[T any](param T) T
C) func name<T>(param T) T
D) func name[T any](param T) T
Resposta: B

105. comparable constraint is used for:
A) Only numbers
B) Types that can be compared
C) Only structs
D) Only strings
Resposta: B

🏗️ TOPIC: PATTERNS AND IDIOMS
106. How do you implement singleton in Go?
A) Constructor pattern
B) Global variable
C) Factory pattern
D) sync.Once
Resposta: D

107. Functional options pattern is used for:
A) Flexible struct configuration
B) Only for singletons
C) Only for factories
D) Only for builders
Resposta: A

108. How do you implement builder in Go?
A) Method chaining
B) Fluent interface
C) Constructor chaining
D) Methods returning *Builder
Resposta: D

109. defer is used for:
A) Executing code before returning
B) Only for cleanup
C) Only for logging
D) Only for errors
Resposta: A

110. panic/recover is used for:
A) Normal error handling
B) Debugging
C) Error logging
D) Exceptional error handling
Resposta: D

📚 TOPIC: STANDARD LIBRARY
111. fmt package is used for:
A) Only for printing
B) Only for scanning
C) I/O formatting
D) Only for logging
Resposta: C

112. os package provides:
A) Only for files
B) Only for signals
C) Operating system functionality
D) Only for environment
Resposta: C

113. io package defines:
A) Basic I/O interfaces
B) Only for files
C) Only for buffers
D) Only for network
Resposta: A

114. strings package provides:
A) Only for parsing
B) Only for formatting
C) String manipulation functions
D) Only for validation
Resposta: C

115. time package is used for:
A) Only for delays
B) Only for durations
C) Only for timestamps
D) Time measurement and formatting
Resposta: D

🔍 TOPIC: DEBUGGING AND PROFILING
116. How do you debug in Go?
A) gdb
B) logging
C) delve debugger
D) print statements
Resposta: C

117. pprof is used for:
A) Performance profiling
B) CPU analysis
C) Memory debugging
D) All of the above
Resposta: D

118. go vet checks:
A) Runtime errors
B) Syntax errors
C) Suspicious constructs
D) Logic errors
Resposta: C

119. go fmt formats:
A) Source code automatically
B) Only indentation
C) Only imports
D) Only comments
Resposta: A

120. race detector detects:
A) Race conditions in goroutines
B) Memory leaks
C) Performance issues
D) Deadlocks
Resposta: A

🌐 TOPIC: NETWORKING
121. net/http package supports:
A) Only client
B) Only HTTPS
C) Only server
D) HTTP client and server
Resposta: D

122. How do you make HTTP request?
A) http.Fetch(url)
B) http.Request(url)
C) http.Get(url)
D) http.Call(url)
Resposta: C

123. tcp listener is created with:
A) net.TCP(addr)
B) net.Listen("tcp", addr)
C) net.CreateTCP(addr)
D) net.ListenTCP(addr)
Resposta: B

124. How do you read from connection?
A) conn.Read(buffer)
B) conn.Get(buffer)
C) conn.Receive(buffer)
D) conn.Accept(buffer)
Resposta: A

125. TLS is supported via:
A) net/tls package
B) tls/net package
C) crypto/tls package
D) security/tls package
Resposta: C

📊 TOPIC: PERFORMANCE AND OPTIMIZATION
126. How do you measure performance in Go?
A) time.Now() for timing
B) testing.B for benchmarks
C) pprof for profiling
D) All of the above
Resposta: D

127. How do you optimize memory allocation?
A) Increasing GC
B) Using stacks
C) Object pooling with sync.Pool
D) Reducing pointers
Resposta: C

128. How do you reduce garbage collection pressure?
A) Calling GC manually
B) Increasing memory
C) Reusing objects
D) Using fewer goroutines
Resposta: C

129. escape analysis determines:
A) Function performance
B) Memory leaks
C) If variable escapes to heap
D) CPU usage
Resposta: C

130. How do you profile memory usage?
A) go tool memory
B) go tool pprof -allocs
C) go tool heap
D) go tool mem
Resposta: B

🔧 TOPIC: TOOLCHAIN AND BUILD TOOLS
131. go install installs:
A) Binaries in GOPATH/bin
B) Local packages
C) Modules
D) Dependencies
Resposta: A

132. go list shows:
A) Only dependencies
B) Only versions
C) Only sources
D) Information about packages/modules
Resposta: D

133. go mod tidy:
A) Cleans unused dependencies
B) Removes module
C) Installs dependencies
D) Updates dependencies
Resposta: A

134. go work creates:
A) Shared workspace
B) New workspace
C) Multi-module project
D) Workspace with multiple modules
Resposta: D

135. go version shows:
A) Only compiler version
B) Only runtime version
C) Only toolchain version
D) Installed Go version
Resposta: D

🎯 TOPIC: BEST PRACTICES
136. What is the convention for names in Go?
A) snake_case always
B) kebab-case always
C) PascalCase always
D) CamelCase for exported, camelCase for unexported
Resposta: D

137. How do you document Go code?
A) Javadoc style
B) README files
C) Comments above declarations
D) XML documentation
Resposta: C

138. godoc generates:
A) HTML docs
B) Documentation from comments
C) API docs
D) Manual pages
Resposta: B

139. How do you handle errors in Go?
A) With null checks
B) Explicitly, without exceptions
C) With assertions
D) With try-catch
Resposta: B

140. What is the convention for package names?
A) CamelCase
B) snake_case
C) Lowercase, single word
D) kebab-case
Resposta: C

🚀 TOPIC: ECOSYSTEM AND COMMUNITY
141. Go playground allows:
A) Running Go code in browser
B) Only for sharing
C) Only for testing
D) Only for learning
Resposta: A

142. golang.org is:
A) Discussion forum
B) Official language website
C) Code repository
D) Community blog
Resposta: B

143. Effective Go is:
A) Basic tutorial
B) Best practices guide
C) Go book
D) Complete reference
Resposta: B

144. Go modules replace:
A) Dep
B) Glide
C) GOPATH system
D) Vendor directory
Resposta: C

145. Go 1.0 was released in:
A) 2015
B) 2012
C) 2009
D) 2010
Resposta: B

🔧 TOPIC: COMPILER AND RUNTIME
146. Go compiler is written in:
A) C++
B) Assembly
C) C
D) Go
Resposta: D

147. Go runtime manages:
A) Only I/O
B) Only memory
C) Goroutines, garbage collection, scheduling
D) Only threads
Resposta: C

148. Go uses:
A) No linking
B) Mixed linking
C) Static linking by default
D) Dynamic linking
Resposta: C

149. Go garbage collector is:
A) Stop-the-world
B) Concurrent, generational, low-latency
C) Manual
D) Reference counting
Resposta: B

150. Go compiles to:
A) Only macOS
B) Only Windows
C) Multiple architectures and operating systems
D) Only Linux
Resposta: C

🎯 TEMA: FEATURES AVANÇADAS
101. Generics foram introduzidos em qual versão?
A) Go 1.18
B) Go 1.16
C) Go 2.0
D) Go 1.20
Resposta: A

102. Como se define tipo genérico?
A) <T extends>
B) [T interface{}]
C) [T any]
D) <T>
Resposta: C

103. any é alias para:
A) generic type
B) any type
C) interface{}
D) all types
Resposta: C

104. Como se usa tipo genérico em função?
A) func nome<T any>(param T) T
B) func nome[T](param T) T
C) func nome<T>(param T) T
D) func nome[T any](param T) T
Resposta: D

105. comparable constraint é usado para:
A) Apenas strings
B) Apenas números
C) Apenas structs
D) Tipos que podem ser comparados
Resposta: D

🏗️ TEMA: PATTERNS E IDIOMAS
106. Como se implementa singleton em Go?
A) Constructor pattern
B) Variável global
C) Factory pattern
D) sync.Once
Resposta: D

107. Functional options pattern é usado para:
A) Apenas para builders
B) Configuração flexível de structs
C) Apenas para factories
D) Apenas para singletons
Resposta: B

108. Como se implementa builder em Go?
A) Method chaining
B) Métodos que retornam *Builder
C) Fluent interface
D) Constructor chaining
Resposta: B

109. defer é usado para:
A) Apenas para errors
B) Apenas para logging
C) Apenas para cleanup
D) Executar código antes de retornar
Resposta: D

110. panic/recover é usado para:
A) Error handling normal
B) Debugging
C) Tratamento de erros excepcionais
D) Logging de errors
Resposta: C

📚 TEMA: STANDARD LIBRARY
111. fmt package é usado para:
A) Apenas para logging
B) Apenas para scanning
C) Formatação de I/O
D) Apenas para printing
Resposta: C

112. os package fornece:
A) Funcionalidades do sistema operacional
B) Apenas para signals
C) Apenas para environment
D) Apenas para files
Resposta: A

113. io package define:
A) Apenas para network
B) Apenas para files
C) Interfaces básicas de I/O
D) Apenas para buffers
Resposta: C

114. strings package fornece:
A) Apenas para validation
B) Apenas para parsing
C) Apenas para formatting
D) Funções para manipulação de strings
Resposta: D

115. time package é usado para:
A) Apenas para durations
B) Apenas para timestamps
C) Medição e formatação de tempo
D) Apenas para delays
Resposta: C

🔍 TEMA: DEBUGGING E PROFILING
116. Como se faz debugging em Go?
A) gdb
B) logging
C) delve debugger
D) print statements
Resposta: C

117. pprof é usado para:
A) Performance profiling
B) Todas as alternativas
C) Memory debugging
D) CPU analysis
Resposta: B

118. go vet verifica:
A) Logic errors
B) Suspicious constructs
C) Runtime errors
D) Syntax errors
Resposta: B

119. go fmt formata:
A) Apenas imports
B) Apenas comments
C) Source code automaticamente
D) Apenas indentation
Resposta: C

120. race detector detecta:
A) Deadlocks
B) Performance issues
C) Memory leaks
D) Race conditions em goroutines
Resposta: D

🌐 TEMA: NETWORKING
121. net/http package suporta:
A) Client e server HTTP
B) Apenas server
C) Apenas client
D) Apenas HTTPS
Resposta: A

122. Como se faz HTTP request?
A) http.Fetch(url)
B) http.Get(url)
C) http.Request(url)
D) http.Call(url)
Resposta: B

123. tcp listener é criado com:
A) net.ListenTCP(addr)
B) net.Listen("tcp", addr)
C) net.TCP(addr)
D) net.CreateTCP(addr)
Resposta: B

124. Como se lê de connection?
A) conn.Read(buffer)
B) conn.Accept(buffer)
C) conn.Receive(buffer)
D) conn.Get(buffer)
Resposta: A

125. TLS é suportado via:
A) crypto/tls package
B) tls/net package
C) net/tls package
D) security/tls package
Resposta: A

📊 TEMA: PERFORMANCE E OTIMIZAÇÃO
126. Como se mede performance em Go?
A) time.Now() para timing
B) Todas as alternativas
C) pprof para profiling
D) testing.B para benchmarks
Resposta: B

127. Como se otimiza alocação de memória?
A) Usando stacks
B) Aumentando GC
C) Object pooling com sync.Pool
D) Reduzindo pointers
Resposta: C

128. Como se reduz garbage collection pressure?
A) Usando menos goroutines
B) Reusando objetos
C) Chamando GC manualmente
D) Aumentando memória
Resposta: B

129. escape analysis determina:
A) Se variável escapa para heap
B) Memory leaks
C) Performance de funções
D) CPU usage
Resposta: A

130. Como se profile memory usage?
A) go tool memory
B) go tool mem
C) go tool pprof -allocs
D) go tool heap
Resposta: C

🔧 TEMA: TOOLCHAIN E BUILD TOOLS
131. go install instala:
A) Packages localmente
B) Binários no GOPATH/bin
C) Dependências
D) Módulos
Resposta: B

132. go list mostra:
A) Apenas versões
B) Apenas dependências
C) Informações sobre packages/módulos
D) Apenas sources
Resposta: C

133. go mod tidy:
A) Atualiza dependências
B) Instala dependências
C) Limpa dependências não usadas
D) Remove módulo
Resposta: C

134. go work cria:
A) Multi-module project
B) Workspace com múltiplos módulos
C) Novo workspace
D) Shared workspace
Resposta: B

135. go version mostra:
A) Apenas do compilador
B) Apenas do toolchain
C) Versão do Go instalada
D) Apenas do runtime
Resposta: C

🎯 TEMA: BEST PRACTICES
136. Qual é a convenção para nomes em Go?
A) PascalCase sempre
B) CamelCase para exportado, camelCase para não exportado
C) snake_case sempre
D) kebab-case sempre
Resposta: B

137. Como se documenta código Go?
A) Comments acima de declarações
B) Arquivos README
C) Javadoc style
D) XML documentation
Resposta: A

138. godoc gera:
A) Manual pages
B) API docs
C) Documentação a partir de comments
D) HTML docs
Resposta: C

139. Como se handle errors em Go?
A) Explicitamente, sem exceções
B) Com null checks
C) Com try-catch
D) Com assertions
Resposta: A

140. Qual é a convenção para package names?
A) kebab-case
B) Lowercase, single word
C) CamelCase
D) snake_case
Resposta: B

🚀 TEMA: ECOSISTEMA E COMUNIDADE
141. Go playground permite:
A) Executar código Go no browser
B) Apenas para sharing
C) Apenas para testing
D) Apenas para learning
Resposta: A

142. golang.org é:
A) Fórum de discussão
B) Site oficial da linguagem
C) Repositório de código
D) Blog da comunidade
Resposta: B

143. Effective Go é:
A) Tutorial básico
B) Book sobre Go
C) Guia de boas práticas
D) Reference completa
Resposta: C

144. Go modules substituem:
A) GOPATH system
B) Dep
C) Glide
D) Vendor directory
Resposta: A

145. Go 1.0 foi lançado em:
A) 2015
B) 2010
C) 2012
D) 2009
Resposta: C

🔧 TEMA: COMPILADOR E RUNTIME
146. Go compiler é escrito em:
A) Go
B) C++
C) Assembly
D) C
Resposta: A

147. Go runtime gerencia:
A) Apenas memory
B) Apenas threads
C) Apenas I/O
D) Goroutines, garbage collection, scheduling
Resposta: D

148. Go usa:
A) Static linking por padrão
B) No linking
C) Mixed linking
D) Dynamic linking
Resposta: A

149. Go garbage collector é:
A) Manual
B) Reference counting
C) Concurrent, generational, low-latency
D) Stop-the-world
Resposta: C

150. Go compila para:
A) Apenas Windows
B) Apenas Linux
C) Múltiplas arquiteturas e sistemas operacionais
D) Apenas macOS
Resposta: C
