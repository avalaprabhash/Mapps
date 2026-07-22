import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class MemberService{
    private members : any[] = [];

    addMember(member : any): void{
        this.members.push(member);
    }

    getMembers(): any[] {
        return this.members;
    }
}