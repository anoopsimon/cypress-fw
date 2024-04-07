# ARCH PQ

graph TD
    A(Requirements) -->|Automated Requirement Analysis| B(Design)
    B -->|Design Validation| C(Implementation)
    C -->|CI Pipeline| D(Testing)
    D --> E(Deployment)
    E -->|CD Pipeline| F(Maintenance)
    F -->|Feedback Loop| A
    E --> G(Production)
    G -->|Real-time Monitoring & Feedback| A
    D <-->|Powered by 'The X'| H{{"The X: Automated Testing & Reporting"}}
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#ccf,stroke:#333,stroke-width:2px
    style C fill:#fcf,stroke:#333,stroke-width:2px
    style D fill:#e6e6fa,stroke:#333,stroke-width:4px
    style E fill:#cfc,stroke:#333,stroke-width:2px
    style F fill:#ff9,stroke:#333,stroke-width:2px
    style G fill:#f96,stroke:#333,stroke-width:2px
    style H fill:#f9d,stroke:#333,stroke-dasharray:5,stroke-width:2px

    classDef sdPhase fill:#fff,stroke:#333,stroke-width:4px;
    class A,B,C,E,F,G sdPhase;
