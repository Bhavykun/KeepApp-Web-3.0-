import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";

actor Keeper{
    public type Note = {
        title : Text;
        content : Text;
    };

    stable var notes : List.List<Note> = List.nil<Note>();

    public func createNote(titleText: Text, contentText: Text){
        let newNote: Note ={
            title = titleText;
            content = contentText;
        };
        notes := List.push(newNote, notes);
        Debug.print(debug_show (notes));
    };

    public query func readNotes() : async [Note]{
        return List.toArray(notes);
    };
    
    public func removeNote(id: Nat){
       let lisFront= List.take(notes, id);
       let lisBack= List.drop(notes,id+1);
       notes:= List.append(lisFront,lisBack);
       Debug.print("Note deleted");
    };


}