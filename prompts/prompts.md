# Secuencia de prompts usados

## Creacion de contexto

```
   Quiero que tengas un contexto del proyecto. inicialmente haremos unas modificaciones sobre el modelo de datos para ampliar algunas funcionalidades
```

## Contexto de Necesidad

```
    este es el modelo ER que requiero implementar.

    ERD:

    erDiagram
        COMPANY {
            int id PK
            string name
        }
        EMPLOYEE {
            int id PK
            int company_id FK
            string name
            string email
            string role
            boolean is_active
        }
        POSITION {
            int id PK
            int company_id FK
            int interview_flow_id FK
            string title
            text description
            string status
            boolean is_visible
            string location
            text job_description
            text requirements
            text responsibilities
            numeric salary_min
            numeric salary_max
            string employment_type
            text benefits
            text company_description
            date application_deadline
            string contact_info
        }
        INTERVIEW_FLOW {
            int id PK
            string description
        }
        INTERVIEW_STEP {
            int id PK
            int interview_flow_id FK
            int interview_type_id FK
            string name
            int order_index
        }
        INTERVIEW_TYPE {
            int id PK
            string name
            text description
        }
        CANDIDATE {
            int id PK
            string firstName
            string lastName
            string email
            string phone
            string address
        }
        APPLICATION {
            int id PK
            int position_id FK
            int candidate_id FK
            date application_date
            string status
            text notes
        }
        INTERVIEW {
            int id PK
            int application_id FK
            int interview_step_id FK
            int employee_id FK
            date interview_date
            string result
            int score
            text notes
        }

        COMPANY ||--o{ EMPLOYEE : employs
        COMPANY ||--o{ POSITION : offers
        POSITION ||--|| INTERVIEW_FLOW : assigns
        INTERVIEW_FLOW ||--o{ INTERVIEW_STEP : contains
        INTERVIEW_STEP ||--|| INTERVIEW_TYPE : uses
        POSITION ||--o{ APPLICATION : receives
        CANDIDATE ||--o{ APPLICATION : submits
        APPLICATION ||--o{ INTERVIEW : has
        INTERVIEW ||--|| INTERVIEW_STEP : consists_of
        EMPLOYEE ||--o{ INTERVIEW : conducts
 
```

## Generación de SQL del MER

```
    Quiero que me muestres en sql como quedaria la nueva estructura
```

## Generación de SQL de los modelos

```
    Quiero que me muestres en sql como quedaria la nueva estructura de los modelos
```

## Normalización inicial de la BD
```
    podriamos mejorar el modelo y normalizarlo? En caso de poder hacerlo, explicame paso a paso las modificaciones sugeridas
```

## Analisis de indices

```
    Que indices se recomiendan para garantizar el rendimiento de la base de datos?
```
## Evaluación sobre principales  consultas sobre la BD

```
    cuales crees que son las principales consultas que pueden ayudar a resolver preguntas del negocio en funcion de este modelo de datos?
```
## Ajuste de indices

```
    cuales crees que son las principales consultas que pueden ayudar a resolver preguntas del negocio en funcion de este modelo de datos?
```

## Continuar con plan de implementación

```
    teniendo en cuenta las mejoras en estructura e indices, quiero que volvamos al plan de integración
```
## Ajuste de Schema

```
    conociendo la estructura actual de la base de datos, quiero que me des la ruta para implementar los cambios, asegurate de tener en cuenta la modificacion del modelo de prisma @schema.prisma  y la implementacion de migraciones. 
```

## Ajuste en la implementación de Prisma

```
    antes de continuar con la migración, revisando no veo los indices que hemos identificado en esta ventana contextual
```

## Migraciones

```
    iniciemos con la migración, ten en cuenta que la base de datos aun no tiene datos
```

## Generación del archivo mermaid

```
me puedes generar el archivo mermaid del MER?
```

```
    El modelo no esta completo, por ejemplo falta la definición de candidate. Verifica que mas falta y agregalo
```
