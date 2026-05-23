Based on Go design patterns, here are more than 100 questions following the TOON format.

🏗️ TOPIC: SINGLETON PATTERN
1. What is the Singleton pattern in Go?
A) A pattern that creates multiple instances of a struct
B) A pattern for managing memory
C) A pattern that ensures a class has only one instance
D) A pattern for creating object arrays
Resposta: C

2. Which Go package is frequently used to implement thread-safe Singleton?
A) sync
B) fmt
C) time
D) os
Resposta: A

3. How do you implement a Singleton lazy initialization in Go?
A) Creating multiple constructors
B) Using sync.Once to guarantee unique initialization
C) Using make() for each call
D) Using global variables directly
Resposta: B

4. What is the main disadvantage of Singleton pattern?
A) Testing difficulty due to global state
B) Excessive memory consumption
C) Implementation complexity
D) Low performance
Resposta: A

5. In Go, package-level variables are semantically equivalent to:
A) Builder pattern
B) Singleton pattern
C) Factory pattern
D) Observer pattern
Resposta: B

6. What is eager initialization in Singleton?
A) Initialization only when needed
B) Concurrent initialization
C) Initialization when program starts
D) Initialization with goroutines
Resposta: C

7. How do you guarantee thread-safety in Singleton Go?
A) Using goroutines
B) Using mutexes or sync.Once
C) Using channels
D) Not necessary in Go
Resposta: B

8. Singleton pattern is considered anti-pattern in Go because:
A) Doesn't work with interfaces
B) Go doesn't support object orientation
C) Violates explicit dependency principle
D) Consumes too much CPU
Resposta: C

🏭 TOPIC: FACTORY PATTERN
9. What is the Factory pattern in Go?
A) A pattern for serializing data
B) A pattern for creating objects without specifying exact classes
C) A pattern for destroying objects
D) A pattern for managing concurrency
Resposta: B

10. How do interfaces facilitate Factory pattern in Go?
A) Simplifying syntax
B) Reducing memory usage
C) Increasing performance
D) Allowing polymorphism through interfaces
Resposta: D

11. What is the difference between Factory Method and Abstract Factory?
A) Factory Method creates one product, Abstract Factory creates families of products
B) Factory Method is slower
C) Abstract Factory is simpler
D) No difference
Resposta: A

12. How do you implement Factory Method in Go?
A) Using structs directly
B) Using inheritance
C) Using reflection
D) Using interfaces and functions that return interfaces
Resposta: D

13. When should you use Factory pattern in Go?
A) Never in Go
B) Always, for all code
C) Only for web applications
D) When there's complex creation logic
Resposta: D

14. How do you handle errors in Factory methods Go?
A) Returning (interface, error)
B) Ignoring errors
C) Using panic
D) Using logs only
Resposta: A

15. Factory pattern helps with:
A) Decoupling between client code and object creation
B) JSON serialization
C) Memory performance
D) Automatic concurrency
Resposta: A

🔨 TOPIC: BUILDER PATTERN
16. What is the Builder pattern in Go?
A) A pattern for building web interfaces
B) A pattern for building complex objects step by step
C) A pattern for building databases
D) A pattern for building REST APIs
Resposta: B

17. How do you implement Builder pattern with functional options in Go?
A) Using functions that modify a struct
B) Using inheritance
C) Using reflection
D) Using chained methods like Java
Resposta: A

18. What is the advantage of Builder pattern over struct literals?
A) Allows validation and complex construction
B) It's simpler for simple structs
C) Uses less memory
D) It's faster
Resposta: A

19. How do you handle validation in Builder pattern?
A) Not necessary
B) Using middleware
C) In the final Build() method
D) In each setter method
Resposta: C

20. Builder pattern is useful for:
A) Configurations with many optional parameters
B) Only for databases
C) Only for web applications
D) Always, without exception
Resposta: A

📋 TOPIC: PROTOTYPE PATTERN
21. What is the Prototype pattern in Go?
A) A pattern for testing code
B) A pattern for creating new objects by copying existing ones
C) A pattern for creating API prototypes
D) A pattern for managing logs
Resposta: B

22. What is the difference between shallow copy and deep copy?
A) Deep copy uses less memory
B) Shallow copy copies pointers, deep copy copies values
C) Shallow copy is slower
D) No difference
Resposta: B

23. How do you implement deep copy in Go?
A) Using direct assignment
B) Not possible in Go
C) Using pointers
D) Using JSON marshal/unmarshal or manual copying
Resposta: D

24. When Prototype pattern is useful?
A) Never in Go
B) When object creation is expensive
C) Always, for all code
D) Only for strings
Resposta: B

25. Prototype pattern helps with:
A) Performance when objects are expensive to create
B) Concurrency
C) Network latency
D) Memory usage
Resposta: A

🔌 TOPIC: ADAPTER PATTERN
26. What is the Adapter pattern in Go?
A) A pattern for making incompatible interfaces work together
B) A pattern for adapting databases
C) A pattern for adapting web code
D) A pattern for adapting APIs
Resposta: A

27. How do you implement Adapter pattern in Go?
A) Creating structs that implement target interfaces
B) Using reflection
C) Using inheritance
D) Modifying existing code
Resposta: A

28. What is the difference between Adapter and Facade?
A) Adapter adapts interfaces, Facade simplifies subsystems
B) Adapter is more complex
C) No difference
D) Facade is slower
Resposta: A

29. Adapter pattern is useful for:
A) Only for legacy code
B) Integrating third-party libraries
C) Never in Go
D) Only for web applications
Resposta: B

30. How do Go interfaces facilitate Adapter pattern?
A) Simplifying syntax
B) Increasing performance
C) Reducing memory usage
D) Allowing implicit implementation
Resposta: D

🌉 TOPIC: BRIDGE PATTERN
31. What is the Bridge pattern in Go?
A) A pattern for connecting databases
B) A pattern for separating abstraction from implementation
C) A pattern for integrating APIs
D) A pattern for building network bridges
Resposta: B

32. Bridge pattern helps with:
A) Concurrency control
B) Platform independence
C) Network performance
D) Memory management
Resposta: B

33. How do you implement Bridge pattern in Go?
A) Using structs directly
B) Using interfaces for abstraction and implementation
C) Using inheritance
D) Using reflection
Resposta: B

34. When Bridge pattern is useful?
A) Never in Go
B) When there are multiple dimensions of variation
C) Only for graphical applications
D) Always, for all code
Resposta: B

35. Bridge pattern allows:
A) Changing implementation at runtime
B) Better performance
C) Less memory usage
D) More simplicity
Resposta: A

🌳 TOPIC: COMPOSITE PATTERN
36. What is the Composite pattern in Go?
A) A pattern for composing APIs
B) A pattern for treating individual objects and compositions uniformly
C) A pattern for composing strings
D) A pattern for composing images
Resposta: B

37. How do you implement Composite pattern in Go?
A) Using pointers
B) Using interfaces and recursive slices
C) Using reflection
D) Using inheritance
Resposta: B

38. Composite pattern is useful for:
A) Never in Go
B) Only for databases
C) Hierarchical structures like file systems
D) Only for web applications
Resposta: C

39. How do you navigate Composite structures in Go?
A) Using linear iteration
B) Using goroutines
C) Not possible
D) Using recursion
Resposta: D

40. Empty interface {} in Composite pattern:
A) Simplifies code
B) Allows storing different types
C) Increases performance
D) Reduces memory usage
Resposta: B

🎨 TOPIC: DECORATOR PATTERN
41. What is the Decorator pattern in Go?
A) A pattern for adding functionality to objects dynamically
B) A pattern for decorating logs
C) A pattern for decorating databases
D) A pattern for decorating web interfaces
Resposta: A

42. How do you implement Decorator pattern in Go?
A) Using inheritance
B) Using structs that implement the same interface
C) Using reflection
D) Modifying existing code
Resposta: B

43. Decorator pattern is common in:
A) File operations
B) Database connections
C) Network protocols
D) HTTP middleware
Resposta: D

44. What is the difference between Decorator and Proxy?
A) No difference
B) Decorator is slower
C) Proxy is more complex
D) Decorator adds functionality, Proxy controls access
Resposta: D

45. How do you chain decorators in Go?
A) Using goroutines
B) Composing structs that implement interfaces
C) Not possible
D) Using arrays of functions
Resposta: B

🏛️ TOPIC: FACADE PATTERN
46. What is the Facade pattern in Go?
A) A pattern for simplifying complex interfaces
B) A pattern for building web facades
C) A pattern for building databases
D) A pattern for building APIs
Resposta: A

47. Facade pattern helps with:
A) Memory reduction
B) Simplified API design
C) Concurrency control
D) Performance improvement
Resposta: B

48. How do you implement Facade pattern in Go?
A) Using inheritance
B) Creating structs that expose simplified methods
C) Modifying subsystems
D) Using reflection
Resposta: B

49. Facade pattern is useful for:
A) Never in Go
B) Only for desktop applications
C) Only for databases
D) Microservices and complex APIs
Resposta: D

50. How do you handle errors in Facade pattern?
A) Ignoring errors
B) Propagating or transforming subsystem errors
C) Not necessary
D) Using panic
Resposta: B

✈️ TOPIC: FLYWEIGHT PATTERN
51. What is the Flyweight pattern in Go?
A) A pattern for fast performance
B) A pattern for sharing objects to reduce memory usage
C) A pattern for flying objects
D) A pattern for lightweight applications
Resposta: B

52. How do you implement Flyweight pattern in Go?
A) Using maps to store shared objects
B) Using reflection
C) Using arrays
D) Using pointers
Resposta: A

53. What is the difference between intrinsic and extrinsic state?
A) Extrinsic uses more memory
B) Intrinsic is shared, extrinsic is contextual
C) No difference
D) Intrinsic is slower
Resposta: B

54. Flyweight pattern is useful for:
A) Never in Go
B) Large quantities of similar objects
C) Only for graphical applications
D) Only for databases
Resposta: B

55. sync.Pool in Go can be used for:
A) Channel communication
B) Object pooling similar to Flyweight
C) Thread synchronization
D) Memory allocation
Resposta: B

🔐 TOPIC: PROXY PATTERN
56. What is the Proxy pattern in Go?
A) A pattern for API proxy
B) A pattern for database proxy
C) A pattern for network proxy
D) A pattern for controlling access to objects
Resposta: D

57. How do you implement Proxy pattern in Go?
A) Using reflection
B) Using inheritance
C) Creating structs that implement the same interface as the real object
D) Modifying original object
Resposta: C

58. Proxy pattern is useful for:
A) Never in Go
B) Only for databases
C) Only for web applications
D) Lazy loading and access control
Resposta: D

59. How do you implement lazy loading with Proxy?
A) Initializing object only when needed
B) Using goroutines
C) Not possible
D) Loading everything at start
Resposta: A

60. What is the difference between Proxy and Decorator?
A) No difference
B) Decorator is slower
C) Proxy is simpler
D) Proxy controls access, Decorator adds functionality
Resposta: D

⛓️ TOPIC: CHAIN OF RESPONSIBILITY
61. What is the Chain of Responsibility pattern?
A) A pattern for call chains
B) A pattern for block chains
C) A pattern for passing requests along a chain of handlers
D) A pattern for character chains
Resposta: C

62. How do you implement Chain of Responsibility in Go?
A) Using interfaces and slices of handlers
B) Using arrays of functions
C) Using reflection
D) Using goroutines
Resposta: A

63. Chain of Responsibility is common in:
A) File processing
B) Database operations
C) HTTP middleware
D) Network protocols
Resposta: C

64. How do you terminate a chain in Chain of Responsibility?
A) Returning early or using flag
B) Using panic
C) Not possible
D) Using goroutines
Resposta: A

65. Chain of Responsibility helps with:
A) Performance improvement
B) Decoupling sender and receiver
C) Concurrency control
D) Memory reduction
Resposta: B

📝 TOPIC: COMMAND PATTERN
66. What is the Command pattern in Go?
A) A pattern for shell commands
B) A pattern for SQL commands
C) A pattern for encapsulating requests as objects
D) A pattern for HTTP commands
Resposta: C

67. How do you implement Command pattern in Go?
A) Using pointers
B) Using functions directly
C) Using reflection
D) Using structs with Execute() method
Resposta: D

68. Command pattern is useful for:
A) Only for databases
B) Undo/redo functionality
C) Only for graphical applications
D) Never in Go
Resposta: B

69. How do closures help in Command pattern?
A) Reduce memory usage
B) Allow capturing state for later execution
C) Simplify syntax
D) Increase performance
Resposta: B

70. Command pattern allows:
A) Queueing and logging of operations
B) Better performance
C) Less memory usage
D) More simplicity
Resposta: A

🔄 TOPIC: ITERATOR PATTERN
71. What is the Iterator pattern in Go?
A) A pattern for iterating strings
B) A pattern for iterating maps
C) A pattern for iterating arrays
D) A pattern for accessing elements of a collection sequentially
Resposta: D

72. How does Go range statement relate to Iterator?
A) It's completely different
B) It's slower
C) Uses more memory
D) It's built-in form of Iterator pattern
Resposta: D

73. How do you implement custom Iterator in Go?
A) With Next() and Current() methods
B) Using for loops
C) Not possible
D) Using range directly
Resposta: A

74. Iterator pattern is useful for:
A) Never in Go
B) Only for maps
C) Custom data structures
D) Only for slices
Resposta: C

75. Channels in Go can be used as:
A) Maps
B) Structs
C) Concurrent iterators
D) Arrays
Resposta: C

🎯 TOPIC: MEDIATOR PATTERN
76. What is the Mediator pattern in Go?
A) A pattern for centralizing communication between objects
B) A pattern for mediating databases
C) A pattern for mediating APIs
D) A pattern for mediating conflicts
Resposta: A

77. How do you implement Mediator pattern in Go?
A) Using reflection
B) Using interface Mediator and concrete mediators
C) Using goroutines
D) Using arrays of objects
Resposta: B

78. Mediator pattern helps with:
A) Reducing dependencies between objects
B) Memory reduction
C) Concurrency control
D) Performance improvement
Resposta: A

79. Mediator pattern is useful for:
A) Only for web applications
B) Never in Go
C) Chat systems and UI components
D) Only for databases
Resposta: C

80. How do you handle communication in Mediator?
A) Using channels
B) Directly between objects
C) Through the central mediator
D) Not necessary
Resposta: C

💾 TOPIC: MEMENTO PATTERN
81. What is the Memento pattern in Go?
A) A pattern for capturing and restoring object state
B) A pattern for managing RAM
C) A pattern for optimizing memory
D) A pattern for saving memory
Resposta: A

82. How do you implement Memento pattern in Go?
A) Using reflection
B) Using pointers
C) Using JSON serialization
D) With Memento and Caretaker structs
Resposta: D

83. Memento pattern is useful for:
A) Only for databases
B) Never in Go
C) Only for graphical applications
D) Undo/redo functionality
Resposta: D

84. How do you preserve encapsulation in Memento?
A) Using reflection
B) Memento has restricted access to state
C) Not possible
D) Exposing all fields
Resposta: B

85. Memento pattern allows:
A) Less memory usage
B) Restoring previous state without violating encapsulation
C) Better performance
D) More simplicity
Resposta: B

👁️ TOPIC: OBSERVER PATTERN
86. What is the Observer pattern in Go?
A) A pattern for observing performance
B) A pattern for observing memory
C) A pattern for observing logs
D) A pattern for notifying multiple objects about state changes
Resposta: D

87. How do you implement Observer pattern in Go?
A) Using channels or Observer/Subject interfaces
B) Using arrays of functions
C) Using goroutines
D) Using reflection
Resposta: A

88. Observer pattern is common in:
A) Event-driven systems and reactive programming
B) Only for web applications
C) Never in Go
D) Only for databases
Resposta: A

89. Channels in Go are natural for:
A) Maps
B) Structs
C) Implementing Observer pattern
D) Arrays
Resposta: C

90. How do you handle multiple observers?
A) Maintaining slice of observers and notifying all
B) Using channels
C) Using goroutines
D) Not possible
Resposta: A

🎭 TOPIC: STATE PATTERN
91. What is the State pattern in Go?
A) A pattern for managing application state
B) A pattern for session state
C) A pattern for changing behavior when state changes
D) A pattern for database state
Resposta: C

92. How do you implement State pattern in Go?
A) Using numbers
B) Using enums
C) Using strings
D) Using interfaces State and concrete states
Resposta: D

93. State pattern helps with:
A) Performance improvement
B) Memory reduction
C) Eliminating large conditionals
D) Concurrency control
Resposta: C

94. How do you handle state transitions?
A) Each state decides next state
B) Using if-else chains
C) Not possible
D) Using switch statements
Resposta: A

95. State pattern is useful for:
A) State machines and workflows
B) Only for graphical applications
C) Only for databases
D) Never in Go
Resposta: A

🎯 TOPIC: STRATEGY PATTERN
96. What is the Strategy pattern in Go?
A) A pattern for encapsulating algorithms and making them interchangeable
B) A pattern for game strategies
C) A pattern for business strategies
D) A pattern for API strategies
Resposta: A

97. How do you implement Strategy pattern in Go?
A) Using reflection
B) Using functions directly
C) Using pointers
D) Using interfaces Strategy and concrete strategies
Resposta: D

98. Strategy pattern is useful for:
A) Only for databases
B) Only for mathematical applications
C) Variable algorithms (sorting, validation, etc.)
D) Never in Go
Resposta: C

99. How do you select strategy at runtime?
A) Using if-else chains
B) Not possible
C) Injecting strategy or using factory
D) Using switch statements
Resposta: C

100. What is the difference between State and Strategy?
A) State changes behavior based on state, Strategy encapsulates algorithms
B) Strategy is slower
C) State is more complex
D) No difference
Resposta: A

📋 TOPIC: TEMPLATE METHOD PATTERN
101. What is the Template Method pattern in Go?
A) A pattern for text templates
B) A pattern for code templates
C) 
D) A pattern for defining algorithm skeleton with variable steps
Resposta: D

102. How do you implement Template Method in Go without inheritance?
A) Not possible
B) Using reflection
C) Using functions as parameters or interfaces
D) Using pointers
Resposta: C

103. Template Method is useful for:
A) Only for web applications
B) Never in Go
C) Only for databases
D) Frameworks and libraries
Resposta: D

104. How do you define variable steps?
A) Not possible
B) Using if-else chains
C) As functions passed as parameter
D) Using switch statements
Resposta: C

105. Anonymous functions in Go help with:
A) Concurrency
B) Memory usage
C) Performance
D) Template Method pattern
Resposta: D

👥 TOPIC: VISITOR PATTERN
106. What is the Visitor pattern in Go?
A) A pattern for visiting databases
B) A pattern for visiting APIs
C) A pattern for adding operations to object structures without modifying them
D) A pattern for visiting websites
Resposta: C

107. How do you implement Visitor pattern in Go?
A) Using reflection
B) Modifying existing structs
C) Using pointers
D) Using interfaces Visitor and Accept()
Resposta: D

108. Visitor pattern is useful for:
A) Compilers and document processing
B) Only for graphical applications
C) Never in Go
D) Only for databases
Resposta: A

109. How do you handle new element types?
A) Modifying existing visitors
B) Not possible
C) Adding new methods to interfaces
D) Using reflection
Resposta: C

110. Type assertions in Go help with:
A) Performance
B) Visitor pattern for type-specific operations
C) Memory usage
D) Concurrency
Resposta: B

🏗️ TOPIC: FUNCTIONAL OPTIONS PATTERN
111. What is the Functional Options pattern in Go?
A) A pattern for menu options
B) A pattern for functional options
C) A pattern for configuration options
D) A pattern for configuring structs with optional parameters
Resposta: D

112. How do you implement Functional Options?
A) Using builders
B) Using singletons
C) Using factories
D) Using functions that modify a struct
Resposta: D

113. Functional Options is an alternative to:
A) Multiple constructors or default parameters
B) Factory pattern
C) Singleton pattern
D) Builder pattern
Resposta: A

114. How do you define default option?
A) Using constants
B) With struct with default values
C) Not possible
D) Using global variables
Resposta: B

115. Functional Options pattern helps with:
A) Concurrency
B) Performance
C) Memory usage
D) Clean and extensible API design
Resposta: D

🔄 TOPIC: WORKER POOL PATTERN
116. What is the Worker Pool pattern in Go?
A) 
B) A pattern for object pool
C) A pattern for memory pool
D) A pattern for limiting number of goroutines processing tasks
Resposta: D

117. How do you implement Worker Pool?
A) With task channel and worker pool
B) Using individual goroutines
C) Using threads
D) Not possible
Resposta: A

118. Worker Pool helps with:
A) Memory usage
B) Network latency
C) CPU performance
D) Resource management and throttling
Resposta: D

119. How do you control number of workers?
A) Limiting created goroutines
B) Not possible
C) Using buffered channels
D) Using mutexes
Resposta: A

120. Worker Pool avoids:
A) Memory leaks
B) Resource exhaustion
C) Deadlocks
D) Race conditions
Resposta: B

🌊 TOPIC: FAN-IN/FAN-OUT PATTERN
121. What is the Fan-in/Fan-out pattern?
A) Distributing work (fan-out) and aggregating results (fan-in)
B) A pattern for file distribution
C) A pattern for ventilation
D) A pattern for network distribution
Resposta: A

122. How do you implement Fan-out?
A) Using threads
B) Using one worker
C) Multiple goroutines reading from same channel
D) Not possible
Resposta: C

123. How do you implement Fan-in?
A) Not possible
B) Multiple channels writing to an aggregator channel
C) Using arrays
D) Using one channel
Resposta: B

124. Fan-in/Fan-out is useful for:
A) Parallel data processing
B) Only for web applications
C) Only for databases
D) Never in Go
Resposta: A

125. Select statement in Go helps with:
A) Memory usage
B) Performance
C) Concurrency
D) Fan-in pattern
Resposta: D

🔧 TOPIC: MIDDLEWARE PATTERN
126. What is the Middleware pattern in Go?
A) A pattern for network middleware
B) A pattern for software middleware
C) A pattern for processing requests in layers
D) A pattern for hardware middleware
Resposta: C

127. How do you implement Middleware?
A) Using interfaces
B) With functions that receive and return http.Handler
C) Using reflection
D) Using structs
Resposta: B

128. Middleware is common in:
A) Only for databases
B) Never in Go
C) Web frameworks and HTTP servers
D) Only for desktop applications
Resposta: C

129. How do you chain middlewares?
A) Using arrays
B) Not possible
C) Using goroutines
D) Composing functions or using chaining
Resposta: D

130. Middleware pattern allows:
A) Cross-cutting concerns (logging, auth, etc.)
B) More simplicity
C) Less memory usage
D) Better performance
Resposta: A

🗄️ TOPIC: REPOSITORY PATTERN
131. What is the Repository pattern in Go?
A) A pattern for configuration repositories
B) A pattern for code repositories
C) A pattern for abstracting data access
D) A pattern for file repositories
Resposta: C

132. How do you implement Repository pattern?
A) Using reflection
B) With interfaces that define data operations
C) Using structs directly
D) Using pointers
Resposta: B

133. Repository pattern helps with:
A) Performance
B) Memory usage
C) Testability and decoupling
D) Concurrency
Resposta: C

134. How do you test Repository pattern?
A) Using real database
B) With mocks of interfaces
C) Not possible
D) Using files
Resposta: B

135. Repository pattern abstracts:
A) Persistence details
B) Business logic
C) Validation rules
D) User interface
Resposta: A

💉 TOPIC: DEPENDENCY INJECTION PATTERN
136. What is Dependency Injection in Go?
A) A pattern for network dependency injection
B) A pattern for injecting dependencies instead of creating them
C) A pattern for SQL injection
D) A pattern for code injection
Resposta: B

137. How do you implement DI in Go?
A) Using reflection
B) Using global variables
C) With constructors that receive interfaces
D) Using singletons
Resposta: C

138. Dependency Injection helps with:
A) Testability and decoupling
B) Performance
C) Memory usage
D) Concurrency
Resposta: A

139. Common types of DI include:
A) Compile-time injection
B) Constructor, setter, and interface injection
C) Runtime injection
D) Dynamic injection
Resposta: B

140. DI containers in Go are:
A) Less common due to language simplicity
B) Essential for all code
C) More complex than in other languages
D) Don't exist
Resposta: A

🏊 TOPIC: OBJECT POOL PATTERN
141. What is the Object Pool pattern in Go?
A) A pattern for reusing objects instead of creating them
B) A pattern for connection pool
C) A pattern for memory pool
D) A pattern for thread pool
Resposta: A

142. How do you implement Object Pool in Go?
A) Using sync.Pool or custom implementation
B) Using maps
C) Using arrays
D) Using slices
Resposta: A

143. sync.Pool in Go is:
A) Slow
B) Thread-unsafe
C) Memory intensive
D) Thread-safe and garbage collector friendly
Resposta: D

144. Object Pool helps with:
A) Performance when creation is expensive
B) Memory usage
C) Network latency
D) Concurrency
Resposta: A

145. When to use Object Pool?
A) Always, for all code
B) Never in Go
C) Only for web applications
D) For expensive to create and reusable objects
Resposta: D

🔄 TOPIC: RETRY PATTERN
146. What is the Retry pattern in Go?
A) A pattern for trying again
B) A pattern for connection retry
C) A pattern for API retry
D) A pattern for repeating operations that fail
Resposta: D

147. How do you implement Retry pattern?
A) Using goroutines
B) Not possible
C) With loops, exponential backoff, and max attempts
D) Using channels
Resposta: C

148. Exponential backoff is:
A) Random wait
B) Fixed wait time
C) Increasing wait time between attempts
D) Decreasing wait time
Resposta: C

149. Retry pattern is useful for:
A) Only for files
B) Never in Go
C) Only for databases
D) Network operations and external APIs
Resposta: D

150. How do you avoid infinite retries?
A) Using timeout
B) Not possible
C) With maximum attempt limit
D) Using channels
Resposta: C

🚪 TOPIC: CIRCUIT BREAKER PATTERN
151. What is the Circuit Breaker pattern?
A) A pattern for breaking changes
B) A pattern for electrical circuits
C) A pattern for breaking APIs
D) A pattern for stopping calls to failing services
Resposta: D

152. Circuit Breaker states include:
A) Success, Failure, Unknown
B) Active, Inactive, Pending
C) On, Off, Standby
D) Closed, Open, Half-Open
Resposta: D

153. How do you implement Circuit Breaker?
A) Using channels
B) Using goroutines
C) With failure counter and recovery timeout
D) Not possible
Resposta: C

154. Circuit Breaker helps with:
A) Resilience and fallback
B) Performance
C) Memory usage
D) Concurrency
Resposta: A

155. Half-Open state allows:
A) Random calls
B) Limited attempts to test recovery
C) No call to pass
D) All calls to pass
Resposta: B

📝 TOPIC: TEST DOUBLE PATTERN
156. What is the Test Double pattern?
A) A pattern for double tests
B) A pattern for substituting dependencies in tests
C) A pattern for double testing
D) A pattern for testing double
Resposta: B

157. Types of Test Doubles include:
A) Basic, Intermediate, Expert
B) Mock, Stub, Spy, Fake, Dummy
C) Real, Virtual, Hybrid
D) Simple, Complex, Advanced
Resposta: B

158. Mock vs Stub:
A) Mock verifies behavior, Stub returns fixed data
B) No difference
C) Stub is slower
D) Mock is simpler
Resposta: A

159. How do you create Test Doubles in Go?
A) Using reflection
B) With interfaces and test implementations
C) Using pointers
D) Modifying original code
Resposta: B

160. Test Double pattern helps with:
A) Test unit isolation
B) Concurrency
C) Memory usage
D) Performance
Resposta: A

📊 TOPIC: TABLE-DRIVEN TEST PATTERN
