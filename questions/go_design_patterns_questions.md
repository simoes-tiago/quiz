Based on Go design patterns, here are more than 100 questions following the TOON format.

🏗️ TOPIC: SINGLETON PATTERN
1. What is the Singleton pattern in Go?
A) A pattern that creates multiple instances of a struct
B) A pattern that ensures a class has only one instance
C) A pattern for creating object arrays
D) A pattern for managing memory
Resposta: B

2. Which Go package is frequently used to implement thread-safe Singleton?
A) fmt
B) sync
C) os
D) time
Resposta: B

3. How do you implement a Singleton lazy initialization in Go?
A) Using global variables directly
B) Using sync.Once to guarantee unique initialization
C) Creating multiple constructors
D) Using make() for each call
Resposta: B

4. What is the main disadvantage of Singleton pattern?
A) Testing difficulty due to global state
B) Excessive memory consumption
C) Low performance
D) Implementation complexity
Resposta: A

5. In Go, package-level variables are semantically equivalent to:
A) Factory pattern
B) Singleton pattern
C) Builder pattern
D) Observer pattern
Resposta: B

6. What is eager initialization in Singleton?
A) Initialization when program starts
B) Initialization only when needed
C) Concurrent initialization
D) Initialization with goroutines
Resposta: A

7. How do you guarantee thread-safety in Singleton Go?
A) Using mutexes or sync.Once
B) Using channels
C) Using goroutines
D) Not necessary in Go
Resposta: A

8. Singleton pattern is considered anti-pattern in Go because:
A) Go doesn't support object orientation
B) Violates explicit dependency principle
C) Consumes too much CPU
D) Doesn't work with interfaces
Resposta: B

🏭 TOPIC: FACTORY PATTERN
9. What is the Factory pattern in Go?
A) A pattern for creating objects without specifying exact classes
B) A pattern for destroying objects
C) A pattern for serializing data
D) A pattern for managing concurrency
Resposta: A

10. How do interfaces facilitate Factory pattern in Go?
A) Allowing polymorphism through interfaces
B) Increasing performance
C) Reducing memory usage
D) Simplifying syntax
Resposta: A

11. What is the difference between Factory Method and Abstract Factory?
A) Factory Method creates one product, Abstract Factory creates families of products
B) Factory Method is slower
C) Abstract Factory is simpler
D) No difference
Resposta: A

12. How do you implement Factory Method in Go?
A) Using interfaces and functions that return interfaces
B) Using structs directly
C) Using inheritance
D) Using reflection
Resposta: A

13. When should you use Factory pattern in Go?
A) When there's complex creation logic
B) Always, for all code
C) Only for web applications
D) Never in Go
Resposta: A

14. How do you handle errors in Factory methods Go?
A) Returning (interface, error)
B) Using panic
C) Ignoring errors
D) Using logs only
Resposta: A

15. Factory pattern helps with:
A) Decoupling between client code and object creation
B) Memory performance
C) Automatic concurrency
D) JSON serialization
Resposta: A

🔨 TOPIC: BUILDER PATTERN
16. What is the Builder pattern in Go?
A) A pattern for building complex objects step by step
B) A pattern for building REST APIs
C) A pattern for building web interfaces
D) A pattern for building databases
Resposta: A

17. How do you implement Builder pattern with functional options in Go?
A) Using functions that modify a struct
B) Using chained methods like Java
C) Using inheritance
D) Using reflection
Resposta: A

18. What is the advantage of Builder pattern over struct literals?
A) Allows validation and complex construction
B) It's faster
C) Uses less memory
D) It's simpler for simple structs
Resposta: A

19. How do you handle validation in Builder pattern?
A) In the final Build() method
B) In each setter method
C) Using middleware
D) Not necessary
Resposta: A

20. Builder pattern is useful for:
A) Configurations with many optional parameters
B) Only for web applications
C) Only for databases
D) Always, without exception
Resposta: A

📋 TOPIC: PROTOTYPE PATTERN
21. What is the Prototype pattern in Go?
A) A pattern for creating new objects by copying existing ones
B) A pattern for creating API prototypes
C) A pattern for testing code
D) A pattern for managing logs
Resposta: A

22. What is the difference between shallow copy and deep copy?
A) Shallow copy copies pointers, deep copy copies values
B) Shallow copy is slower
C) Deep copy uses less memory
D) No difference
Resposta: A

23. How do you implement deep copy in Go?
A) Using JSON marshal/unmarshal or manual copying
B) Using direct assignment
C) Using pointers
D) Not possible in Go
Resposta: A

24. When Prototype pattern is useful?
A) When object creation is expensive
B) Always, for all code
C) Only for strings
D) Never in Go
Resposta: A

25. Prototype pattern helps with:
A) Performance when objects are expensive to create
B) Memory usage
C) Concurrency
D) Network latency
Resposta: A

🔌 TOPIC: ADAPTER PATTERN
26. What is the Adapter pattern in Go?
A) A pattern for making incompatible interfaces work together
B) A pattern for adapting web code
C) A pattern for adapting databases
D) A pattern for adapting APIs
Resposta: A

27. How do you implement Adapter pattern in Go?
A) Creating structs that implement target interfaces
B) Using inheritance
C) Using reflection
D) Modifying existing code
Resposta: A

28. What is the difference between Adapter and Facade?
A) Adapter adapts interfaces, Facade simplifies subsystems
B) Adapter is more complex
C) Facade is slower
D) No difference
Resposta: A

29. Adapter pattern is useful for:
A) Integrating third-party libraries
B) Only for legacy code
C) Only for web applications
D) Never in Go
Resposta: A

30. How do Go interfaces facilitate Adapter pattern?
A) Allowing implicit implementation
B) Increasing performance
C) Reducing memory usage
D) Simplifying syntax
Resposta: A

🌉 TOPIC: BRIDGE PATTERN
31. What is the Bridge pattern in Go?
A) A pattern for separating abstraction from implementation
B) A pattern for building network bridges
C) A pattern for connecting databases
D) A pattern for integrating APIs
Resposta: A

32. Bridge pattern helps with:
A) Platform independence
B) Network performance
C) Memory management
D) Concurrency control
Resposta: A

33. How do you implement Bridge pattern in Go?
A) Using interfaces for abstraction and implementation
B) Using structs directly
C) Using inheritance
D) Using reflection
Resposta: A

34. When Bridge pattern is useful?
A) When there are multiple dimensions of variation
B) Always, for all code
C) Only for graphical applications
D) Never in Go
Resposta: A

35. Bridge pattern allows:
A) Changing implementation at runtime
B) Better performance
C) Less memory usage
D) More simplicity
Resposta: A

🌳 TOPIC: COMPOSITE PATTERN
36. What is the Composite pattern in Go?
A) A pattern for treating individual objects and compositions uniformly
B) A pattern for composing strings
C) A pattern for composing images
D) A pattern for composing APIs
Resposta: A

37. How do you implement Composite pattern in Go?
A) Using interfaces and recursive slices
B) Using inheritance
C) Using reflection
D) Using pointers
Resposta: A

38. Composite pattern is useful for:
A) Hierarchical structures like file systems
B) Only for web applications
C) Only for databases
D) Never in Go
Resposta: A

39. How do you navigate Composite structures in Go?
A) Using recursion
B) Using linear iteration
C) Using goroutines
D) Not possible
Resposta: A

40. Empty interface {} in Composite pattern:
A) Allows storing different types
B) Increases performance
C) Reduces memory usage
D) Simplifies code
Resposta: A

🎨 TOPIC: DECORATOR PATTERN
41. What is the Decorator pattern in Go?
A) A pattern for adding functionality to objects dynamically
B) A pattern for decorating web interfaces
C) A pattern for decorating logs
D) A pattern for decorating databases
Resposta: A

42. How do you implement Decorator pattern in Go?
A) Using structs that implement the same interface
B) Using inheritance
C) Using reflection
D) Modifying existing code
Resposta: A

43. Decorator pattern is common in:
A) HTTP middleware
B) Database connections
C) File operations
D) Network protocols
Resposta: A

44. What is the difference between Decorator and Proxy?
A) Decorator adds functionality, Proxy controls access
B) Decorator is slower
C) Proxy is more complex
D) No difference
Resposta: A

45. How do you chain decorators in Go?
A) Composing structs that implement interfaces
B) Using arrays of functions
C) Using goroutines
D) Not possible
Resposta: A

🏛️ TOPIC: FACADE PATTERN
46. What is the Facade pattern in Go?
A) A pattern for simplifying complex interfaces
B) A pattern for building web facades
C) A pattern for building APIs
D) A pattern for building databases
Resposta: A

47. Facade pattern helps with:
A) Simplified API design
B) Performance improvement
C) Memory reduction
D) Concurrency control
Resposta: A

48. How do you implement Facade pattern in Go?
A) Creating structs that expose simplified methods
B) Using inheritance
C) Using reflection
D) Modifying subsystems
Resposta: A

49. Facade pattern is useful for:
A) Microservices and complex APIs
B) Only for desktop applications
C) Only for databases
D) Never in Go
Resposta: A

50. How do you handle errors in Facade pattern?
A) Propagating or transforming subsystem errors
B) Ignoring errors
C) Using panic
D) Not necessary
Resposta: A

✈️ TOPIC: FLYWEIGHT PATTERN
51. What is the Flyweight pattern in Go?
A) A pattern for sharing objects to reduce memory usage
B) A pattern for flying objects
C) A pattern for lightweight applications
D) A pattern for fast performance
Resposta: A

52. How do you implement Flyweight pattern in Go?
A) Using maps to store shared objects
B) Using arrays
C) Using pointers
D) Using reflection
Resposta: A

53. What is the difference between intrinsic and extrinsic state?
A) Intrinsic is shared, extrinsic is contextual
B) Intrinsic is slower
C) Extrinsic uses more memory
D) No difference
Resposta: A

54. Flyweight pattern is useful for:
A) Large quantities of similar objects
B) Only for graphical applications
C) Only for databases
D) Never in Go
Resposta: A

55. sync.Pool in Go can be used for:
A) Object pooling similar to Flyweight
B) Thread synchronization
C) Channel communication
D) Memory allocation
Resposta: A

🔐 TOPIC: PROXY PATTERN
56. What is the Proxy pattern in Go?
A) A pattern for controlling access to objects
B) A pattern for network proxy
C) A pattern for database proxy
D) A pattern for API proxy
Resposta: A

57. How do you implement Proxy pattern in Go?
A) Creating structs that implement the same interface as the real object
B) Using inheritance
C) Using reflection
D) Modifying original object
Resposta: A

58. Proxy pattern is useful for:
A) Lazy loading and access control
B) Only for web applications
C) Only for databases
D) Never in Go
Resposta: A

59. How do you implement lazy loading with Proxy?
A) Initializing object only when needed
B) Loading everything at start
C) Using goroutines
D) Not possible
Resposta: A

60. What is the difference between Proxy and Decorator?
A) Proxy controls access, Decorator adds functionality
B) Proxy is simpler
C) Decorator is slower
D) No difference
Resposta: A

⛓️ TOPIC: CHAIN OF RESPONSIBILITY
61. What is the Chain of Responsibility pattern?
A) A pattern for passing requests along a chain of handlers
B) A pattern for block chains
C) A pattern for character chains
D) A pattern for call chains
Resposta: A

62. How do you implement Chain of Responsibility in Go?
A) Using interfaces and slices of handlers
B) Using arrays of functions
C) Using goroutines
D) Using reflection
Resposta: A

63. Chain of Responsibility is common in:
A) HTTP middleware
B) Database operations
C) File processing
D) Network protocols
Resposta: A

64. How do you terminate a chain in Chain of Responsibility?
A) Returning early or using flag
B) Using panic
C) Using goroutines
D) Not possible
Resposta: A

65. Chain of Responsibility helps with:
A) Decoupling sender and receiver
B) Performance improvement
C) Memory reduction
D) Concurrency control
Resposta: A

📝 TOPIC: COMMAND PATTERN
66. What is the Command pattern in Go?
A) A pattern for encapsulating requests as objects
B) A pattern for shell commands
C) A pattern for SQL commands
D) A pattern for HTTP commands
Resposta: A

67. How do you implement Command pattern in Go?
A) Using structs with Execute() method
B) Using functions directly
C) Using reflection
D) Using pointers
Resposta: A

68. Command pattern is useful for:
A) Undo/redo functionality
B) Only for graphical applications
C) Only for databases
D) Never in Go
Resposta: A

69. How do closures help in Command pattern?
A) Allow capturing state for later execution
B) Increase performance
C) Reduce memory usage
D) Simplify syntax
Resposta: A

70. Command pattern allows:
A) Queueing and logging of operations
B) Better performance
C) Less memory usage
D) More simplicity
Resposta: A

🔄 TOPIC: ITERATOR PATTERN
71. What is the Iterator pattern in Go?
A) A pattern for accessing elements of a collection sequentially
B) A pattern for iterating strings
C) A pattern for iterating arrays
D) A pattern for iterating maps
Resposta: A

72. How does Go range statement relate to Iterator?
A) It's built-in form of Iterator pattern
B) It's completely different
C) It's slower
D) Uses more memory
Resposta: A

73. How do you implement custom Iterator in Go?
A) With Next() and Current() methods
B) Using range directly
C) Using for loops
D) Not possible
Resposta: A

74. Iterator pattern is useful for:
A) Custom data structures
B) Only for slices
C) Only for maps
D) Never in Go
Resposta: A

75. Channels in Go can be used as:
A) Concurrent iterators
B) Arrays
C) Maps
D) Structs
Resposta: A

🎯 TOPIC: MEDIATOR PATTERN
76. What is the Mediator pattern in Go?
A) A pattern for centralizing communication between objects
B) A pattern for mediating conflicts
C) A pattern for mediating APIs
D) A pattern for mediating databases
Resposta: A

77. How do you implement Mediator pattern in Go?
A) Using interface Mediator and concrete mediators
B) Using arrays of objects
C) Using goroutines
D) Using reflection
Resposta: A

78. Mediator pattern helps with:
A) Reducing dependencies between objects
B) Performance improvement
C) Memory reduction
D) Concurrency control
Resposta: A

79. Mediator pattern is useful for:
A) Chat systems and UI components
B) Only for web applications
C) Only for databases
D) Never in Go
Resposta: A

80. How do you handle communication in Mediator?
A) Through the central mediator
B) Directly between objects
C) Using channels
D) Not necessary
Resposta: A

💾 TOPIC: MEMENTO PATTERN
81. What is the Memento pattern in Go?
A) A pattern for capturing and restoring object state
B) A pattern for saving memory
C) A pattern for managing RAM
D) A pattern for optimizing memory
Resposta: A

82. How do you implement Memento pattern in Go?
A) With Memento and Caretaker structs
B) Using JSON serialization
C) Using pointers
D) Using reflection
Resposta: A

83. Memento pattern is useful for:
A) Undo/redo functionality
B) Only for graphical applications
C) Only for databases
D) Never in Go
Resposta: A

84. How do you preserve encapsulation in Memento?
A) Memento has restricted access to state
B) Exposing all fields
C) Using reflection
D) Not possible
Resposta: A

85. Memento pattern allows:
A) Restoring previous state without violating encapsulation
B) Better performance
C) Less memory usage
D) More simplicity
Resposta: A

👁️ TOPIC: OBSERVER PATTERN
86. What is the Observer pattern in Go?
A) A pattern for notifying multiple objects about state changes
B) A pattern for observing logs
C) A pattern for observing performance
D) A pattern for observing memory
Resposta: A

87. How do you implement Observer pattern in Go?
A) Using channels or Observer/Subject interfaces
B) Using arrays of functions
C) Using goroutines
D) Using reflection
Resposta: A

88. Observer pattern is common in:
A) Event-driven systems and reactive programming
B) Only for web applications
C) Only for databases
D) Never in Go
Resposta: A

89. Channels in Go are natural for:
A) Implementing Observer pattern
B) Arrays
C) Maps
D) Structs
Resposta: A

90. How do you handle multiple observers?
A) Maintaining slice of observers and notifying all
B) Using goroutines
C) Using channels
D) Not possible
Resposta: A

🎭 TOPIC: STATE PATTERN
91. What is the State pattern in Go?
A) A pattern for changing behavior when state changes
B) A pattern for managing application state
C) A pattern for session state
D) A pattern for database state
Resposta: A

92. How do you implement State pattern in Go?
A) Using interfaces State and concrete states
B) Using enums
C) Using strings
D) Using numbers
Resposta: A

93. State pattern helps with:
A) Eliminating large conditionals
B) Performance improvement
C) Memory reduction
D) Concurrency control
Resposta: A

94. How do you handle state transitions?
A) Each state decides next state
B) Using switch statements
C) Using if-else chains
D) Not possible
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
B) A pattern for business strategies
C) A pattern for game strategies
D) A pattern for API strategies
Resposta: A

97. How do you implement Strategy pattern in Go?
A) Using interfaces Strategy and concrete strategies
B) Using functions directly
C) Using reflection
D) Using pointers
Resposta: A

98. Strategy pattern is useful for:
A) Variable algorithms (sorting, validation, etc.)
B) Only for mathematical applications
C) Only for databases
D) Never in Go
Resposta: A

99. How do you select strategy at runtime?
A) Injecting strategy or using factory
B) Using switch statements
C) Using if-else chains
D) Not possible
Resposta: A

100. What is the difference between State and Strategy?
A) State changes behavior based on state, Strategy encapsulates algorithms
B) State is more complex
C) Strategy is slower
D) No difference
Resposta: A

📋 TOPIC: TEMPLATE METHOD PATTERN
101. What is the Template Method pattern in Go?
A) A pattern for defining algorithm skeleton with variable steps
B) A pattern for HTML templates
B) A pattern for text templates
C) A pattern for code templates
Resposta: A

102. How do you implement Template Method in Go without inheritance?
A) Using functions as parameters or interfaces
B) Using reflection
C) Using pointers
D) Not possible
Resposta: A

103. Template Method is useful for:
A) Frameworks and libraries
B) Only for web applications
C) Only for databases
D) Never in Go
Resposta: A

104. How do you define variable steps?
A) As functions passed as parameter
B) Using switch statements
C) Using if-else chains
D) Not possible
Resposta: A

105. Anonymous functions in Go help with:
A) Template Method pattern
B) Performance
C) Memory usage
D) Concurrency
Resposta: A

👥 TOPIC: VISITOR PATTERN
106. What is the Visitor pattern in Go?
A) A pattern for adding operations to object structures without modifying them
B) A pattern for visiting websites
C) A pattern for visiting APIs
D) A pattern for visiting databases
Resposta: A

107. How do you implement Visitor pattern in Go?
A) Using interfaces Visitor and Accept()
B) Using reflection
C) Using pointers
D) Modifying existing structs
Resposta: A

108. Visitor pattern is useful for:
A) Compilers and document processing
B) Only for graphical applications
C) Only for databases
D) Never in Go
Resposta: A

109. How do you handle new element types?
A) Adding new methods to interfaces
B) Modifying existing visitors
C) Not possible
D) Using reflection
Resposta: A

110. Type assertions in Go help with:
A) Visitor pattern for type-specific operations
B) Performance
C) Memory usage
D) Concurrency
Resposta: A

🏗️ TOPIC: FUNCTIONAL OPTIONS PATTERN
111. What is the Functional Options pattern in Go?
A) A pattern for configuring structs with optional parameters
B) A pattern for functional options
C) A pattern for menu options
D) A pattern for configuration options
Resposta: A

112. How do you implement Functional Options?
A) Using functions that modify a struct
B) Using builders
C) Using factories
D) Using singletons
Resposta: A

113. Functional Options is an alternative to:
A) Multiple constructors or default parameters
B) Factory pattern
C) Builder pattern
D) Singleton pattern
Resposta: A

114. How do you define default option?
A) With struct with default values
B) Using constants
C) Using global variables
D) Not possible
Resposta: A

115. Functional Options pattern helps with:
A) Clean and extensible API design
B) Performance
C) Memory usage
D) Concurrency
Resposta: A

🔄 TOPIC: WORKER POOL PATTERN
116. What is the Worker Pool pattern in Go?
A) A pattern for limiting number of goroutines processing tasks
B) A pattern for connection pool
B) A pattern for object pool
C) A pattern for memory pool
Resposta: A

117. How do you implement Worker Pool?
A) With task channel and worker pool
B) Using individual goroutines
C) Using threads
D) Not possible
Resposta: A

118. Worker Pool helps with:
A) Resource management and throttling
B) CPU performance
C) Memory usage
D) Network latency
Resposta: A

119. How do you control number of workers?
A) Limiting created goroutines
B) Using buffered channels
C) Using mutexes
D) Not possible
Resposta: A

120. Worker Pool avoids:
A) Resource exhaustion
B) Memory leaks
C) Race conditions
D) Deadlocks
Resposta: A

🌊 TOPIC: FAN-IN/FAN-OUT PATTERN
121. What is the Fan-in/Fan-out pattern?
A) Distributing work (fan-out) and aggregating results (fan-in)
B) A pattern for ventilation
C) A pattern for file distribution
D) A pattern for network distribution
Resposta: A

122. How do you implement Fan-out?
A) Multiple goroutines reading from same channel
B) Using one worker
C) Using threads
D) Not possible
Resposta: A

123. How do you implement Fan-in?
A) Multiple channels writing to an aggregator channel
B) Using one channel
C) Using arrays
D) Not possible
Resposta: A

124. Fan-in/Fan-out is useful for:
A) Parallel data processing
B) Only for web applications
C) Only for databases
D) Never in Go
Resposta: A

125. Select statement in Go helps with:
A) Fan-in pattern
B) Performance
C) Memory usage
D) Concurrency
Resposta: A

🔧 TOPIC: MIDDLEWARE PATTERN
126. What is the Middleware pattern in Go?
A) A pattern for processing requests in layers
B) A pattern for software middleware
C) A pattern for hardware middleware
D) A pattern for network middleware
Resposta: A

127. How do you implement Middleware?
A) With functions that receive and return http.Handler
B) Using structs
C) Using interfaces
D) Using reflection
Resposta: A

128. Middleware is common in:
A) Web frameworks and HTTP servers
B) Only for desktop applications
C) Only for databases
D) Never in Go
Resposta: A

129. How do you chain middlewares?
A) Composing functions or using chaining
B) Using arrays
C) Using goroutines
D) Not possible
Resposta: A

130. Middleware pattern allows:
A) Cross-cutting concerns (logging, auth, etc.)
B) Better performance
C) Less memory usage
D) More simplicity
Resposta: A

🗄️ TOPIC: REPOSITORY PATTERN
131. What is the Repository pattern in Go?
A) A pattern for abstracting data access
B) A pattern for code repositories
C) A pattern for file repositories
D) A pattern for configuration repositories
Resposta: A

132. How do you implement Repository pattern?
A) With interfaces that define data operations
B) Using structs directly
C) Using reflection
D) Using pointers
Resposta: A

133. Repository pattern helps with:
A) Testability and decoupling
B) Performance
C) Memory usage
D) Concurrency
Resposta: A

134. How do you test Repository pattern?
A) With mocks of interfaces
B) Using real database
C) Using files
D) Not possible
Resposta: A

135. Repository pattern abstracts:
A) Persistence details
B) Business logic
C) Validation rules
D) User interface
Resposta: A

💉 TOPIC: DEPENDENCY INJECTION PATTERN
136. What is Dependency Injection in Go?
A) A pattern for injecting dependencies instead of creating them
B) A pattern for SQL injection
C) A pattern for code injection
D) A pattern for network dependency injection
Resposta: A

137. How do you implement DI in Go?
A) With constructors that receive interfaces
B) Using global variables
C) Using singletons
D) Using reflection
Resposta: A

138. Dependency Injection helps with:
A) Testability and decoupling
B) Performance
C) Memory usage
D) Concurrency
Resposta: A

139. Common types of DI include:
A) Constructor, setter, and interface injection
B) Runtime injection
C) Compile-time injection
D) Dynamic injection
Resposta: A

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
C) A pattern for thread pool
D) A pattern for memory pool
Resposta: A

142. How do you implement Object Pool in Go?
A) Using sync.Pool or custom implementation
B) Using arrays
C) Using maps
D) Using slices
Resposta: A

143. sync.Pool in Go is:
A) Thread-safe and garbage collector friendly
B) Thread-unsafe
C) Memory intensive
D) Slow
Resposta: A

144. Object Pool helps with:
A) Performance when creation is expensive
B) Memory usage
C) Concurrency
D) Network latency
Resposta: A

145. When to use Object Pool?
A) For expensive to create and reusable objects
B) Always, for all code
C) Only for web applications
D) Never in Go
Resposta: A

🔄 TOPIC: RETRY PATTERN
146. What is the Retry pattern in Go?
A) A pattern for repeating operations that fail
B) A pattern for trying again
C) A pattern for connection retry
D) A pattern for API retry
Resposta: A

147. How do you implement Retry pattern?
A) With loops, exponential backoff, and max attempts
B) Using goroutines
C) Using channels
D) Not possible
Resposta: A

148. Exponential backoff is:
A) Increasing wait time between attempts
B) Decreasing wait time
C) Fixed wait time
D) Random wait
Resposta: A

149. Retry pattern is useful for:
A) Network operations and external APIs
B) Only for databases
C) Only for files
D) Never in Go
Resposta: A

150. How do you avoid infinite retries?
A) With maximum attempt limit
B) Using timeout
C) Using channels
D) Not possible
Resposta: A

🚪 TOPIC: CIRCUIT BREAKER PATTERN
151. What is the Circuit Breaker pattern?
A) A pattern for stopping calls to failing services
B) A pattern for electrical circuits
C) A pattern for breaking changes
D) A pattern for breaking APIs
Resposta: A

152. Circuit Breaker states include:
A) Closed, Open, Half-Open
B) On, Off, Standby
C) Active, Inactive, Pending
D) Success, Failure, Unknown
Resposta: A

153. How do you implement Circuit Breaker?
A) With failure counter and recovery timeout
B) Using goroutines
C) Using channels
D) Not possible
Resposta: A

154. Circuit Breaker helps with:
A) Resilience and fallback
B) Performance
C) Memory usage
D) Concurrency
Resposta: A

155. Half-Open state allows:
A) Limited attempts to test recovery
B) All calls to pass
C) No call to pass
D) Random calls
Resposta: A

📝 TOPIC: TEST DOUBLE PATTERN
156. What is the Test Double pattern?
A) A pattern for substituting dependencies in tests
B) A pattern for double tests
C) A pattern for double testing
D) A pattern for testing double
Resposta: A

157. Types of Test Doubles include:
A) Mock, Stub, Spy, Fake, Dummy
B) Real, Virtual, Hybrid
C) Simple, Complex, Advanced
D) Basic, Intermediate, Expert
Resposta: A

158. Mock vs Stub:
A) Mock verifies behavior, Stub returns fixed data
B) Mock is simpler
C) Stub is slower
D) No difference
Resposta: A

159. How do you create Test Doubles in Go?
A) With interfaces and test implementations
B) Using reflection
C) Using pointers
D) Modifying original code
Resposta: A

160. Test Double pattern helps with:
A) Test unit isolation
B) Performance
C) Memory usage
D) Concurrency
Resposta: A

📊 TOPIC: TABLE-DRIVEN TEST PATTERN
