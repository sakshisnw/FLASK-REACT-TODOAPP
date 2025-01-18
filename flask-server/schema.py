import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType 
from models import Todo  

class TodoType(SQLAlchemyObjectType):
    class Meta:
        model = Todo  

class Query(graphene.ObjectType):
    todos = graphene.List(TodoType)

    def resolve_todos(self, info):
        return Todo.query.all()

class CreateTodo(graphene.Mutation):
    todo = graphene.Field(TodoType)

    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String()
        time = graphene.String()
        image = graphene.String()

    def mutate(self, info, title, description, time, image):
        todo = Todo(title=title, description=description, time=time, image=image)
        db.session.add(todo)
        db.session.commit()
        return CreateTodo(todo=todo)

class Mutation(graphene.ObjectType):
    create_todo = CreateTodo.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
