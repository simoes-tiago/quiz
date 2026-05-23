Based on advanced Go design patterns, here are 100 medium to hard difficulty questions following TOON format.

🔥 TOPIC: ADVANCED SINGLETON IMPLEMENTATIONS
1. How do you implement a thread-safe lazy Singleton with double-checked locking in Go?
A) Using atomic.Value directly
B) Using sync.Once with atomic operations
C) Using mutex with double-checked pattern
D) Using channels for synchronization
Resposta: B

2. What is the main challenge when implementing Singleton in Go's concurrent environment?
A) Memory allocation overhead
B) Garbage collection pressure
C) Interface implementation complexity
D) Race conditions during initialization
Resposta: D

3. How can you break Singleton pattern in Go and what's the prevention?
A) Reflection can break it; use unexported fields
B) Copying can break it; use pointer methods
C) Interface casting can break it; use type assertions
D) JSON marshaling can break it; use custom marshaling
Resposta: A

4. What is the performance impact of using sync.Once for Singleton?
A) Minimal overhead after first call
B) High memory allocation cost
C) Significant overhead on every call
D) No overhead after compilation
Resposta: A

5. How do you implement a Singleton that works across multiple processes?
A) Use channels with network communication
B) Use file-based locking or distributed locks
C) Use atomic operations with mmap
D) Use sync.Once with shared memory
Resposta: B

🏭 TOPIC: COMPLEX FACTORY PATTERNS
6. How do you implement Abstract Factory with dependency injection in Go?
A) Singleton factory with configuration
B) Builder pattern with factory methods
C) Factory interface with concrete factories using DI
D) Global factory registry with reflection
Resposta: C

7. What is the best way to handle factory registration in Go?
A) Atomic value for factory storage
B) sync.Map for thread-safe registration
C) Channel-based registration system
D) Global map with mutex protection
Resposta: B

8. How do you implement a Factory that returns different interface implementations based on configuration?
A) Builder pattern with conditional logic
B) Factory function with switch on config type
C) Strategy pattern with factory methods
D) Reflection-based factory with type registry
Resposta: B

9. What is the complexity of implementing a recursive Factory pattern in Go?
A) Interface compatibility checking
B) Circular dependency management
C) Type assertion performance
D) Memory allocation optimization
Resposta: B

10. How do you handle error propagation in complex Factory hierarchies?
A) Log errors and continue
B) Wrap errors with context and stack trace
C) Return nil for all errors
D) Use panic for factory errors
Resposta: B

🔨 TOPIC: ADVANCED BUILDER PATTERNS
11. How do you implement a thread-safe Builder in Go?
A) Use atomic operations for state
B) Use immutable builder with copy-on-write
C) Use mutex for all builder methods
D) Use channels for state updates
Resposta: C

12. What is the most efficient way to validate complex Builder configurations?
A) Lazy validation in Build() method
B) Validation middleware pattern
C) Eager validation in each setter
D) Parallel validation with goroutines
Resposta: A

13. How do you implement a Builder that supports method chaining and parallel construction?
A) Use functional options with validation
B) Use builder with sync.Pool for resources
C) Use builder with context for cancellation
D) Use goroutine-safe builder with channels
Resposta: A

14. What is the memory complexity of a Builder that creates large objects?
A) O(log n) logarithmic memory
B) O(n²) quadratic memory
C) O(n) where n is object size
D) O(1) constant memory
Resposta: C

15. How do you implement a Builder that can be reset and reused?
A) Builder with garbage collection hints
B) Reset method with object pooling
C) Builder with copy-on-write semantics
D) New builder for each construction
Resposta: B

📋 TOPIC: COMPLEX PROTOTYPE IMPLEMENTATIONS
16. How do you implement deep cloning for complex nested structures in Go?
A) Binary serialization with protobuf
B) Recursive reflection-based copying
C) JSON marshal/unmarshal with custom types
D) Code generation for specific types
Resposta: C

17. What is the performance impact of using reflection for Prototype copying?
A) Same performance as manual copying
B) 10-100x slower than manual copying
C) No measurable performance impact
D) 2-3x slower than manual copying
Resposta: B

18. How do you handle circular references in Prototype pattern?
A) Use shallow copy for circular references
B) Use serialization with cycle detection
C) Use visited map to track copied objects
D) Avoid circular references in design
Resposta: C

19. What is the best approach for Prototype with interface fields?
A) Use factory methods for interface creation
B) Use type assertion for interface copying
C) Use serialization for interface marshaling
D) Use reflection to copy interface values
Resposta: B

20. How do you implement Prototype registry with versioning?
A) Database-backed prototype storage
B) Channel-based version distribution
C) Slice of prototypes with version check
D) Map with version key and prototype factory
Resposta: D

🔌 TOPIC: ADVANCED ADAPTER PATTERNS
21. How do you implement an Adapter that works with multiple interface versions?
A) Multiple adapters with factory selection
B) Adapter with reflection-based method resolution
C) Adapter with interface embedding and version detection
D) Generic adapter with type switching
Resposta: C

22. What is the complexity of implementing a bidirectional Adapter?
A) Two-way mapping with conflict resolution
B) Circular dependency management
C) Type assertion overhead
D) Simple one-to-one mapping
Resposta: A

23. How do you handle Adapter lifecycle management in Go?
A) Use finalizers for resource cleanup
B) Use defer statements for cleanup
C) Use panic/recover for error handling
D) Use context for cancellation and cleanup
Resposta: D

24. What is the best approach for Adapter with performance requirements?
A) Reflection-based dynamic dispatch
B) Interface-based abstraction
C) Channel-based communication
D) Direct method calls with minimal overhead
Resposta: D

25. How do you implement an Adapter that can adapt multiple source types?
A) Generic adapter with type switches
B) Multiple specific adapters
C) Adapter factory with type registration
D) Reflection-based universal adapter
Resposta: A

🌉 TOPIC: COMPLEX BRIDGE IMPLEMENTATIONS
26. How do you implement a Bridge with dynamic implementation switching?
A) Factory pattern for implementation creation
B) Interface with atomic pointer swapping
C) Channel-based implementation selection
D) Strategy pattern for implementation choice
Resposta: B

27. What is the memory overhead of Bridge pattern in Go?
A) Single pointer to implementation
B) No additional overhead
C) Interface pointer + implementation pointer
D) Double memory allocation
Resposta: C

28. How do you handle Bridge implementation with different lifecycles?
A) Garbage collection dependency management
B) Channel-based lifecycle coordination
C) Reference counting with atomic operations
D) Context-based lifecycle management
Resposta: D

29. What is the complexity of implementing a Bridge with multiple abstraction levels?
A) Hierarchical interface composition
B) Recursive abstraction resolution
C) Multiple inheritance simulation
D) Flat interface design
Resposta: A

30. How do you implement a Bridge that supports hot-swapping implementations?
A) Factory method with caching
B) Strategy pattern with dynamic selection
C) Channel-based implementation updates
D) Atomic pointer replacement with synchronization
Resposta: D

🌳 TOPIC: ADVANCED COMPOSITE PATTERNS
31. How do you implement a thread-safe Composite pattern?
A) Mutex protection for all operations
B) Atomic operations for state management
C) Channel-based operation queuing
D) Copy-on-write semantics for modifications
Resposta: A

32. What is the performance impact of deep traversal in Composite structures?
A) O(n) time complexity where n is total nodes
B) O(log n) logarithmic time complexity
C) O(1) constant time complexity
D) O(n²) quadratic time complexity
Resposta: A

33. How do you handle concurrent modifications to Composite structures?
A) Channel-based modification queuing
B) Lock-free data structures
C) Mutex protection for all operations
D) Immutable structures with copy-on-write
Resposta: D

34. What is the best approach for Composite with different node types?
A) Generic node with type field
B) Reflection-based method dispatch
C) Multiple composite implementations
D) Interface with type-specific methods
Resposta: D

35. How do you implement lazy loading in Composite pattern?
A) Proxy pattern for child nodes
B) Context-based loading with cancellation
C) Factory method for node creation
D) Channel-based loading mechanism
Resposta: A

🎨 TOPIC: COMPLEX DECORATOR CHAINS
36. How do you implement a Decorator chain that can be dynamically reordered?
A) Linked list of decorator instances
B) Slice of decorators with composition function
C) Channel-based decorator pipeline
D) Stack-based decorator management
Resposta: B

37. What is the memory overhead of deep Decorator chains in Go?
A) Single pointer to final decorator
B) No additional overhead
C) Interface pointer per decorator level
D) Exponential memory growth
Resposta: C

38. How do you handle Decorator with context propagation?
A) Channel-based context distribution
B) Global context variable
C) Context parameter in all methods
D) Context stored in decorator struct
Resposta: C

39. What is the complexity of implementing a Decorator with middleware pattern?
A) Reflection-based method wrapping
B) Function composition with error handling
C) Channel-based message passing
D) Simple method delegation
Resposta: B

40. How do you implement a Decorator that can be conditionally applied?
A) Decorator with enabled flag
B) Multiple decorator implementations
C) Decorator factory with condition checking
D) Decorator with configuration-based logic
Resposta: C

🏛️ TOPIC: ADVANCED FACADE PATTERNS
41. How do you implement a Facade that handles asynchronous operations?
A) Channel-based result collection
B) Callback-based result delivery
C) Context-based operation management
D) Goroutine pool for operation execution
Resposta: C

42. What is the best approach for Facade with circuit breaking?
A) External circuit breaker service
B) Timeout-based circuit breaking
C) Error rate monitoring
D) Circuit breaker pattern in Facade methods
Resposta: D

43. How do you handle Facade with multiple backend versions?
A) Multiple Facade implementations
B) Factory pattern for backend selection
C) Generic Facade with versioning
D) Version detection and routing
Resposta: D

44. What is the complexity of implementing a Facade with retry logic?
A) Simple retry loop
B) Linear backoff implementation
C) Exponential backoff with jitter
D) Fixed retry count
Resposta: C

45. How do you implement a Facade that supports request batching?
A) Goroutine-based batch processor
B) Batch queue with periodic flushing
C) Timer-based batch aggregation
D) Channel-based batch collection
Resposta: B

✈️ TOPIC: COMPLEX FLYWEIGHT IMPLEMENTATIONS
46. How do you implement a Flyweight with automatic cleanup?
A) Channel-based cleanup signaling
B) Timer-based cleanup routine
C) LRU cache with TTL expiration
D) Reference counting with garbage collection
Resposta: C

47. What is the memory efficiency of Flyweight pattern?
A) Partial state sharing
B) Shared intrinsic state, separate extrinsic state
C) Complete object sharing
D) No memory savings
Resposta: B

48. How do you handle Flyweight with concurrent access?
A) Mutex protection for all operations
B) sync.Map for intrinsic state storage
C) Channel-based state coordination
D) Atomic operations for state management
Resposta: B

49. What is the complexity of implementing a Flyweight with object pooling?
A) Garbage collection integration
B) Pool management with lifecycle tracking
C) Reference counting for pool management
D) Simple object reuse
Resposta: B

50. How do you implement a Flyweight that supports different object sizes?
A) Single pool with size adaptation
B) Dynamic Flyweight creation
C) Multiple Flyweight pools by size category
D) Factory method for size-based creation
Resposta: C

🔐 TOPIC: ADVANCED PROXY PATTERNS
51. How do you implement a Proxy with connection pooling?
A) sync.Pool for connection reuse
B) Mutex-protected connection slice
C) Channel-based connection management
D) Atomic counter for connection tracking
Resposta: A

52. What is the best approach for Proxy with authentication?
A) Per-request authentication
B) Token validation with caching
C) Session-based authentication
D) Role-based access control
Resposta: B

53. How do you handle Proxy with request/response transformation?
A) Direct transformation in Proxy
B) Factory method for transformation
C) Middleware pattern in Proxy methods
D) Channel-based transformation pipeline
Resposta: C

54. What is the complexity of implementing a Proxy with caching?
A) TTL-based cache management
B) LRU cache implementation
C) Simple key-value storage
D) Cache invalidation strategy
Resposta: D

55. How do you implement a Proxy that supports multiple protocols?
A) Multiple Proxy implementations
B) Interface-based protocol abstraction
C) Generic Proxy with protocol detection
D) Factory pattern for protocol selection
Resposta: B

⛓️ TOPIC: COMPLEX CHAIN OF RESPONSIBILITY
56. How do you implement a Chain of Responsibility with dynamic handler addition?
A) Channel-based handler registration
B) Map-based handler organization
C) Lock-free linked list structure
D) Thread-safe slice with atomic operations
Resposta: D

57. What is the performance impact of long handler chains?
A) Constant time lookup
B) Quadratic traversal time
C) Linear traversal overhead
D) Logarithmic traversal time
Resposta: C

58. How do you handle Chain of Responsibility with context cancellation?
A) Separate context per handler
B) Timeout-based chain termination
C) Context propagation through chain
D) Channel-based cancellation signaling
Resposta: C

59. What is the best approach for Chain with conditional branching?
A) Handler with internal branching logic
B) Factory pattern for chain selection
C) Multiple chains for different conditions
D) Handler routing based on request type
Resposta: D

60. How do you implement a Chain that supports parallel processing?
A) Sequential processing with goroutines
B) Channel-based parallel dispatch
C) Worker pool for handler execution
D) Fan-out pattern with result aggregation
Resposta: D

📝 TOPIC: ADVANCED COMMAND PATTERNS
61. How do you implement a Command with undo/redo functionality?
A) Command stack with memento pattern
B) Event sourcing for state reconstruction
C) Command history with state snapshots
D) Inverse command execution
Resposta: A

62. What is the memory complexity of Command pattern with history?
A) O(log n) logarithmic memory growth
B) O(n²) quadratic memory growth
C) O(n) where n is command history size
D) O(1) constant memory usage
Resposta: C

63. How do you handle Command with asynchronous execution?
A) Context-based command management
B) Goroutine pool for command execution
C) Channel-based command queuing
D) Callback-based result delivery
Resposta: A

64. What is the best approach for Command with batch processing?
A) Sequential command execution
B) Command queue with batch optimization
C) Command aggregation with batch execution
D) Parallel command processing
Resposta: C

65. How do you implement a Command that supports macro recording?
A) Command logging with playback
B) Command interpreter for macro execution
C) Command factory with macro support
D) Command composition with recording
Resposta: D

🔄 TOPIC: COMPLEX ITERATOR IMPLEMENTATIONS
66. How do you implement a thread-safe Iterator?
A) Copy-on-write iterator state
B) Channel-based iteration
C) Mutex protection for iteration
D) Snapshot-based iteration
Resposta: D

67. What is the performance impact of using range over custom Iterator?
A) Same as built-in range
B) No measurable impact
C) Memory allocation overhead
D) Interface method call overhead
Resposta: D

68. How do you handle Iterator with concurrent modification?
A) Channel-based iteration
B) Fail-fast iteration with error
C) Iterator snapshot at creation time
D) Concurrent-safe data structure
Resposta: C

69. What is the best approach for Iterator with filtering?
A) Generator function with filtering
B) Multiple iterators with composition
C) Decorator pattern for filtering
D) Iterator with internal filtering logic
Resposta: C

70. How do you implement a bidirectional Iterator?
A) Single iterator with direction parameter
B) Two separate iterators
C) Slice-based bidirectional access
D) Interface with Next() and Prev() methods
Resposta: D

🎯 TEMA: ADVANCED MEDIATOR PATTERNS
71. How do you implement a Mediator with event broadcasting?
A) Channel-based event distribution
B) Observer pattern in Mediator
C) Event bus with subscription
D) Direct method calls to all participants
Resposta: B

72. What is the complexity of Mediator with many participants?
A) O(1) constant complexity
B) O(n²) communication complexity
C) O(log n) logarithmic complexity
D) O(n) linear complexity
Resposta: B

73. How do you handle Mediator with circular dependencies?
A) Lazy initialization of participants
B) Factory pattern for participant creation
C) Channel-based communication to break cycles
D) Dependency injection with cycle detection
Resposta: D

74. What is the best approach for Mediator with message filtering?
A) Topic-based message routing
B) Channel-based message filtering
C) Message filtering in Mediator
D) Participant-based filtering
Resposta: A

75. How do you implement a Mediator that supports remote participants?
A) RPC calls to remote participants
B) Message queue for remote communication
C) HTTP API for participant interaction
D) Network communication abstraction
Resposta: D

💾 TEMA: COMPLEX MEMENTO IMPLEMENTATIONS
76. How do you implement a Memento with compression?
A) Use efficient data structures
B) Delta encoding for state changes
C) Compress state before storage
D) Binary serialization with compression
Resposta: C

77. What is the memory overhead of Memento pattern?
A) Pointer to original state
B) Full state copy per memento
C) No additional overhead
D) Incremental state storage
Resposta: B

78. How do you handle Memento with large objects?
A) Compressed memento storage
B) Lazy memento creation
C) Reference-based memento
D) Incremental memento with deltas
Resposta: D

79. What is the best approach for Memento with versioning?
A) Separate memento per version
B) Memento stack with version tracking
C) Delta-based version storage
D) Branching memento structure
Resposta: B

80. How do you implement a Memento that supports branching?
A) Graph-based state management
B) Multiple memento stacks
C) Versioned memento storage
D) Tree structure for state history
Resposta: D

👁️ TEMA: ADVANCED OBSERVER PATTERNS
81. How do you implement an Observer with event filtering?
A) Channel-based filtering
B) Subject-side filtering
C) Observer-side filtering
D) Filter chain in notification system
Resposta: D

82. What is the performance impact of Observer with many subscribers?
A) O(log n) logarithmic notification cost
B) O(n) notification cost where n is subscribers
C) O(1) constant notification cost
D) O(n²) quadratic notification cost
Resposta: B

83. How do you handle Observer with memory-efficient notifications?
A) Channel-based notification system
B) Object pooling for event objects
C) Lazy event creation
D) Event aggregation and batching
Resposta: B

84. What is the best approach for Observer with priority ordering?
A) Priority queue for observer notification
B) Sorted slice of observers
C) Multiple observer groups
D) Weight-based notification order
Resposta: A

85. How do you implement an Observer that supports async notifications?
A) Goroutine pool for notification dispatch
B) Separate goroutine per observer
C) Callback-based async notification
D) Channel-based async notification
Resposta: A

🎭 TEMA: COMPLEX STATE PATTERNS
86. How do you implement a State machine with hierarchical states?
A) Composite state pattern
B) Tree-based state organization
C) Nested state implementations
D) State stack for hierarchy
Resposta: A

87. What is the complexity of State pattern with many transitions?
A) Hash map-based transitions
B) Switch-based transition handling
C) Transition matrix lookup
D) Sequential transition checking
Resposta: C

88. How do you handle State with concurrent transitions?
A) Atomic state transitions
B) Mutex protection for state changes
C) Channel-based state coordination
D) Lock-free state management
Resposta: A

89. What is the best approach for State with history tracking?
A) Event sourcing for state changes
B) State history log
C) Memento pattern for state
D) State stack for undo functionality
Resposta: D

90. How do you implement a State that supports conditional transitions?
A) State machine with validation
B) Guard conditions in transition logic
C) Rule-based state management
D) Policy-based state transitions
Resposta: B

🎯 TEMA: ADVANCED STRATEGY PATTERNS
91. How do you implement a Strategy with runtime selection?
A) Strategy registry with lookup
B) Strategy chain with selection logic
C) Strategy factory with context-based selection
D) Strategy composition with fallback
Resposta: C

92. What is the performance impact of Strategy pattern?
A) Compilation optimization overhead
B) No performance impact
C) Interface dispatch overhead
D) Memory allocation overhead
Resposta: C

93. How do you handle Strategy with parameterization?
A) Strategy with configuration struct
B) Strategy with dependency injection
C) Strategy factory with parameters
D) Functional strategy with closures
Resposta: A

94. What is the best approach for Strategy with caching?
A) LRU cache for strategy results
B) Strategy instance caching
C) Strategy result caching with invalidation
D) Memoization of strategy calls
Resposta: C

95. How do you implement a Strategy that supports composition?
A) Composite strategy with aggregation
B) Strategy decorator pattern
C) Strategy chain with fallback
D) Strategy pipeline with transformation
Resposta: C

📋 TEMA: COMPLEX TEMPLATE METHOD PATTERNS
96. How do you implement a Template Method with hooks?
A) Channel-based hook communication
B) Reflection-based hook invocation
C) Callback functions for hooks
D) Interface with default and hook methods
Resposta: D

97. What is the complexity of Template Method with many steps?
A) Parallel step execution
B) Linear execution with step validation
C) Recursive step execution
D) Constant time execution
Resposta: B

98. How do you handle Template Method with step skipping?
A) Step configuration flags
B) Conditional step execution
C) Step pipeline with filtering
D) Dynamic step composition
Resposta: B

99. What is the best approach for Template Method with parallel steps?
A) Goroutine pool for parallel execution
B) Worker pattern for step processing
C) Context-based parallel execution
D) Channel-based step coordination
Resposta: A

100. How do you implement a Template Method that supports custom steps?
A) Interface-based step implementation
B) Functional step registration
C) Reflection-based step discovery
D) Plugin-based step loading
Resposta: B

👥 TEMA: ADVANCED VISITOR PATTERNS
101. How do you implement a Visitor with double dispatch?
A) Interface methods for each concrete type
B) Reflection-based double dispatch
C) Generic visitor with type constraints
D) Type switching in visitor methods
Resposta: A

102. What is the performance impact of Visitor pattern?
A) Virtual method call overhead
B) No performance impact
C) Compilation optimization overhead
D) Memory allocation overhead
Resposta: A

103. How do you handle Visitor with new element types?
A) Default visitor implementation
B) Visitor interface extension
C) Visitor registration system
D) Reflection-based visitor
Resposta: B

104. What is the best approach for Visitor with stateful operations?
A) Visitor with internal state management
B) Channel-based state coordination
C) Context-based visitor state
D) Stateless visitor with external state
Resposta: A

105. How do you implement a Visitor that supports parallel processing?
A) Visitor with goroutine pool
B) Worker pattern for visitor execution
C) Parallel visitor methods
D) Channel-based visitor dispatch
Resposta: A

🏗️ TEMA: ADVANCED FUNCTIONAL OPTIONS
106. How do you implement Functional Options with validation?
A) Option chaining with validation
B) Option functions that return errors
C) Validation function in options
D) Builder pattern with validation
Resposta: B

107. What is the complexity of Functional Options with many parameters?
A) Linear option application
B) Quadratic option processing
C) Constant time application
D) Logarithmic option processing
Resposta: A

108. How do you handle Functional Options with default values?
A) Option-based default setting
B) Zero value defaults
C) Configuration defaults with override
D) Default struct with option application
Resposta: D

109. What is the best approach for Functional Options with required parameters?
A) Validation function for required options
B) Option chaining with required check
C) Builder pattern with validation
D) Required option parameter
Resposta: A

110. How do you implement Functional Options that support composition?
A) Option chaining with merging
B) Option pipeline with transformation
C) Option aggregation with validation
D) Option composition with higher-order functions
Resposta: D

🔄 TEMA: COMPLEX WORKER POOL PATTERNS
111. How do you implement a Worker Pool with dynamic sizing?
A) Context-based pool scaling
B) Metrics-based pool size adjustment
C) Atomic counter for pool management
D) Channel-based size signaling
Resposta: B

112. What is the memory complexity of Worker Pool pattern?
A) O(n) where n is pool size
B) O(n²) quadratic memory growth
C) O(log n) logarithmic memory growth
D) O(1) constant memory usage
Resposta: A

113. How do you handle Worker Pool with graceful shutdown?
A) Channel close with worker termination
B) Atomic shutdown flag with cleanup
C) Context cancellation with drain wait
D) Timeout-based shutdown
Resposta: C

114. What is the best approach for Worker Pool with priority tasks?
A) Priority queue for task distribution
B) Separate pools per priority
C) Multiple queues for different priorities
D) Task weighting in distribution
Resposta: A

115. How do you implement a Worker Pool that supports task cancellation?
A) Atomic cancellation flag
B) Context-based task cancellation
C) Timeout-based task cancellation
D) Channel-based cancellation signaling
Resposta: B

🌊 TEMA: ADVANCED FAN-IN/FAN-OUT PATTERNS
116. How do you implement Fan-in with backpressure handling?
A) Select statement with channel monitoring
B) Atomic counters for backpressure
C) Goroutine coordination for flow control
D) Buffered channels with flow control
Resposta: D

117. What is the complexity of Fan-in/Fan-out with N goroutines?
A) O(1) constant coordination
B) O(N) goroutine coordination
C) O(N²) quadratic coordination
D) O(log N) logarithmic coordination
Resposta: B

118. How do you handle Fan-in with error propagation?
A) Error context propagation
B) Result struct with error field
C) Error channel aggregation
D) Panic/recover for error handling
Resposta: C

119. What is the best approach for Fan-out with load balancing?
A) Weighted channel distribution
B) Random channel selection
C) Round-robin channel distribution
D) Least-loaded channel selection
Resposta: C

120. How do you implement Fan-in that supports dynamic sources?
A) Reflection-based channel discovery
B) Goroutine coordination for sources
C) Dynamic select statement
D) Channel registration system
Resposta: D

🔧 TEMA: COMPLEX MIDDLEWARE PATTERNS
121. How do you implement Middleware with conditional execution?
A) Middleware function with condition check
B) Middleware factory with conditions
C) Multiple middleware chains
D) Context-based middleware selection
Resposta: A

122. What is the performance impact of deep middleware chains?
A) Logarithmic call overhead
B) Constant time execution
C) Linear function call overhead
D) Quadratic call overhead
Resposta: C

123. How do you handle Middleware with request/response modification?
A) Copy-on-write for modifications
B) Channel-based modification pipeline
C) Direct request/response mutation
D) Middleware with context modification
Resposta: D

124. What is the best approach for Middleware with async operations?
A) Context-based async coordination
B) Channel-based async handling
C) Callback-based async execution
D) Goroutine-based async middleware
Resposta: D

125. How do you implement Middleware that supports composition?
A) Middleware pipeline with transformation
B) Middleware decorator pattern
C) Function composition with chaining
D) Middleware aggregation with execution
Resposta: C

🗄️ TEMA: ADVANCED REPOSITORY PATTERNS
126. How do you implement a Repository with caching?
A) Multi-level repository with caching
B) Cache-first repository with fallback
C) Repository with cache-aside pattern
D) Repository decorator with cache layer
Resposta: D

127. What is the complexity of Repository with complex queries?
A) Template-based query construction
B) Query builder with optimization
C) Reflection-based query building
D) Dynamic query generation
Resposta: B

128. How do you handle Repository with transaction management?
A) Repository with transaction methods
B) Transaction decorator for repository
C) Unit of work pattern
D) Context-based transaction propagation
Resposta: D

129. What is the best approach for Repository with multiple data sources?
A) Generic repository with source selection
B) Factory pattern for repository creation
C) Multiple repository implementations
D) Repository composition with routing
Resposta: D

130. How do you implement a Repository that supports pagination?
A) Repository methods with pagination parameters
B) Offset-based pagination with caching
C) Slice-based pagination in repository
D) Cursor-based pagination
Resposta: A

💉 TEMA: COMPLEX DEPENDENCY INJECTION PATTERNS
131. How do you implement DI container with circular dependency resolution?
A) Interface-based dependency breaking
B) Factory method for circular dependencies
C) Lazy initialization with proxy injection
D) Dependency graph analysis
Resposta: C

132. What is the memory complexity of DI container?
A) O(log n) logarithmic memory growth
B) O(1) constant memory usage
C) O(n) where n is registered types
D) O(n²) quadratic memory growth
Resposta: C

133. How do you handle DI with lifecycle management?
A) Context-based dependency management
B) Container with scoped dependencies
C) Factory pattern for lifecycle control
D) Dependency lifecycle decorators
Resposta: B

134. What is the best approach for DI with configuration?
A) Environment-based dependency selection
B) Configuration-driven dependency binding
C) Runtime dependency configuration
D) File-based dependency configuration
Resposta: B

135. How do you implement DI that supports hot reloading?
A) Interface-based dependency swapping
B) Container recreation with migration
C) Dynamic container with dependency replacement
D) Channel-based dependency updates
Resposta: C

🏊 TEMA: ADVANCED OBJECT POOL PATTERNS
136. How do you implement an Object Pool with size limits?
A) Channel-based pool with size limit
B) Atomic counter for pool size
C) Pool with capacity management
D) LRU pool with size control
Resposta: C

137. What is the performance impact of Object Pool?
A) Increased memory usage
B) Slower object creation
C) Reduced allocation overhead
D) No performance impact
Resposta: C

138. How do you handle Object Pool with object reset?
A) Factory method with reset
B) Pool-based object initialization
C) Constructor with reset parameters
D) Reset method in pooled objects
Resposta: D

139. What is the best approach for Object Pool with multiple types?
A) Separate pools per type
B) Generic pool with type interface
C) Type-based pool routing
D) Factory pattern for pool selection
Resposta: B

140. How do you implement an Object Pool that supports metrics?
A) Channel-based metrics collection
B) Instrumented pool methods
C) Atomic counters for pool statistics
D) Pool wrapper with metrics collection
Resposta: D

🔄 TEMA: COMPLEX RETRY PATTERNS
141. How do you implement Retry with exponential backoff and jitter?
A) Randomized backoff calculation
B) Exponential backoff with noise
C) Linear backoff with jitter
D) Fixed backoff with random delay
Resposta: A

142. What is the complexity of Retry with circuit breaking?
A) Retry with timeout-based circuit breaking
B) Circuit state management with retry logic
C) Simple retry with circuit check
D) Retry with external circuit breaker
Resposta: B

143. How do you handle Retry with idempotency?
A) Idempotency check before retry
B) Idempotency validation in retry
C) Idempotent operation design
D) Retry with idempotency guarantee
Resposta: A

144. What is the best approach for Retry with multiple strategies?
A) Strategy pattern for retry selection
B) Composite retry with fallback
C) Multiple retry implementations
D) Retry chain with strategy selection
Resposta: A

145. How do you implement Retry that supports dead letter queue?
A) Retry with error categorization
B) Retry with failure logging
C) Failed message routing to dead letter
D) Retry with alternative processing
Resposta: C

🚪 TEMA: ADVANCED CIRCUIT BREAKER PATTERNS
146. How do you implement a Circuit Breaker with metrics?
A) Metrics collection in breaker logic
B) External metrics integration
C) Metrics decorator for breaker
D) Circuit breaker with monitoring
Resposta: A

147. What is the complexity of Circuit Breaker with multiple services?
A) Composite breaker with aggregation
B) Per-service breaker management
C) Hierarchical breaker organization
D) Global breaker with service routing
Resposta: B

148. How do you handle Circuit Breaker with self-healing?
A) Automatic recovery with health checks
B) Time-based circuit recovery
C) Manual circuit breaker reset
D) Health monitoring with recovery
Resposta: A

149. What is the best approach for Circuit Breaker with fallback?
A) Fallback mechanism in breaker
B) Circuit breaker with failover
C) Fallback decorator for breaker
D) Alternative service with circuit breaking
Resposta: A

150. How do you implement a Circuit Breaker that supports configuration?
A) Dynamic breaker configuration
B) Configuration-based breaker creation
C) Runtime configuration updates
D) Configurable breaker parameters
Resposta: D

📝 TEMA: COMPLEX TEST DOUBLE PATTERNS
151. How do you implement Test Double with behavior verification?
A) Mock with call tracking
B) Spy with method interception
C) Fake with implementation
D) Stub with return values
Resposta: A

152. What is the complexity of Test Double with complex scenarios?
A) Reflection-based test double
B) Dynamic test double generation
C) Simple test double creation
D) Scenario-based test setup
Resposta: D

153. How do you handle Test Double with time-dependent behavior?
A) Time injection in test doubles
B) Mock time with control
C) Time abstraction in test doubles
D) Test double with time simulation
Resposta: A

154. What is the best approach for Test Double with concurrent testing?
A) Channel-based test double
B) Thread-safe test double implementation
C) Mock with goroutine coordination
D) Atomic test double operations
Resposta: B

155. How do you implement a Test Double that supports recording?
A) Mock with interaction logging
B) Call recording with playback
C) Test double with scenario recording
D) Spy with behavior capture
Resposta: B

📊 TEMA: ADVANCED TABLE-DRIVEN TEST PATTERNS
156. How do you implement Table-Driven Test with setup/teardown?
A) Test suite with initialization
B) Test wrapper with lifecycle management
C) Table test with resource management
D) Subtest with setup/teardown
Resposta: B

157. What is the complexity of Table-Driven Test with many cases?
A) Constant time test execution
B) Linear test case execution
C) Hierarchical test case organization
D) Parallel test case execution
Resposta: B

158. How do you handle Table-Driven Test with sub-tests?
A) Subtest with table data
B) Test case grouping
C) Hierarchical test organization
D) Nested subtest structure
Resposta: D

159. What is the best approach for Table-Driven Test with data generation?
A) Reflection-based test data
B) Dynamic test case creation
C) Test data factory with generation
D) Template-based test data generation
Resposta: C

160. How do you implement a Table-Driven Test that supports parallel execution?
A) Worker pool for test execution
B) Goroutine-based test execution
C) t.Parallel() in test cases
D) Channel-based test coordination
Resposta: C
